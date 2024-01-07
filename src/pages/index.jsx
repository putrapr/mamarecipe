import { Outlet } from 'react-router-dom'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'

const Index = () => {
  return (
    // if in landing page add relative
    <div className="2xl:container 2xl:mx-auto"> 
      <Navbar />
      <Outlet />
      {/* if in recipe_video, footer disabled */}
      <Footer />
    </div>    
  )
}

export default Index