import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pages from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import DetailRecipe from './pages/DetailRecipe'
import VideoRecipe from './pages/VideoRecipe'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'
import { jwtDecode } from "jwt-decode";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token);
  if (!token || Date.now() >= decoded.exp * 1000)
    return <Navigate to="/login" replace />
  return children
}
PrivateRoute.PropTypes = {
  children: PropTypes.node.isRequired
}

const PublicRoute = ({children}) => {
  const token = localStorage.getItem('token')  
  if (token)
    return <Navigate to="/" replace />
  return children
}
PublicRoute.PropTypes = {
  children: PropTypes.node.isRequired
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' 
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>            
          } 
        />
        <Route path='register' 
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>            
          } 
        />

        <Route path='/' element={<Pages/>}>
          <Route path='' element={<Home />} />
          <Route path='recipe/:id' element={<DetailRecipe />} />
          <Route path='recipe-video/:id' element={<VideoRecipe />} />       
          <Route path='recipe-add' 
            element={
              <PrivateRoute>
                <AddRecipe />
              </PrivateRoute>              
            } 
          />
          <Route path='profile' 
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>              
            } 
          />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
