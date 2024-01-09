import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pages from './pages'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import DetailRecipe from './pages/DetailRecipe'
import VideoRecipe from './pages/VideoRecipe'
import AddRecipe from './pages/AddRecipe'
import Profile from './pages/Profile'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages/>}>
          <Route path='' element={<Home />} />
          <Route path='recipe/:id' element={<DetailRecipe />} />
          <Route path='recipe-video' element={<VideoRecipe />} />
          <Route path='recipe-add' element={<AddRecipe />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
