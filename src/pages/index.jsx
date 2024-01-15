import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'

const Index = () => {
  const { pathname } = useLocation()
  return (
    // if in landing page add relative
    <div className="2xl:container 2xl:mx-auto"> 
      <Navbar />
      <Outlet />
      { !pathname.includes("video") &&  <Footer /> }      
    </div>    
  )
}

export default Index