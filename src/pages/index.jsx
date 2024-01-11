import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/module/Navbar'
import Footer from '../components/module/Footer'

const Index = () => {
  const { pathname } = useLocation()
  // console.log(pathname)
  // !pathname.includes("video") ? console.log("With footer"): console.log("No footer")

  return (
    // if in landing page add relative
    <div className="2xl:container 2xl:mx-auto"> 
      <Navbar />
      <Outlet />
      {/* if in recipe_video, footer disabled */}
      { !pathname.includes("video") &&  <Footer /> }
      
    </div>    
  )
}

export default Index