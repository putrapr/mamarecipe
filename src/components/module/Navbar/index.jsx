import { Link, NavLink } from 'react-router-dom'
import iconUser from '../../../assets/icon/user.svg'
import { jwtDecode } from "jwt-decode";

const index = () => {
  const token = localStorage.getItem('token')
  console.log("tipe token nav: "+ typeof token)
  console.log(token? 'true': 'false')
  let isLogin=false;
  if (token) {
    const decoded = jwtDecode(token)
    if (Date.now() <= decoded.exp * 1000)
      isLogin = true
  }
  // const isLogin = (!token || Date.now() >= decoded.exp * 1000) ? false : true
  const display = (isLogin) ? 'flex' : 'hidden'

  function handleHamburger() {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  }

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between px-5 md:px-16 lg:px-24 h-24">
        <div className="hidden md:flex gap-10 xl:gap-20  xl:ms-0 text-sm text-[#2E266F] font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/recipe-add" className={display}>Add Recipe</NavLink>
          <NavLink to="/profile"className={display}>Profile</NavLink>
        </div>
    
        <button id="hamburger" name="hamburger" type="button" onClick={() => handleHamburger()} className="block md:hidden ">
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
    
        <nav id="nav-menu" className="hidden md:hidden absolute py-5 bg-white border shadow-xl rounded-lg max-w-[250px] w-full left-8 top-20 z-10">
          <ul className="block">
            <li className="group">
              <NavLink to="/" className="flex text-base text-gray-900 py-2 mx-8 group-hover:text-primary">Home</NavLink>
            </li>
            <li className="group">
              <NavLink to="/recipe-add" className={`${display} text-base text-gray-900 py-2 mx-8 group-hover:text-primary`}>Add Recipe</NavLink>
            </li>
            <li className="group">
              <NavLink to="/profile" className={`${display} text-base text-gray-900 py-2 mx-8 group-hover:text-primary`}>Profile</NavLink>
            </li>
          </ul>
        </nav>
    
        <Link to="/login" onClick={() => localStorage.clear()} className="flex items-center gap-1">       
          <div>
            <img src={iconUser} width="32" alt="icon-user" className="xl:w-10"/>
          </div>
          {/* If in home text-white */}
          <p className="text-black text-sm"> 
            { isLogin ? 'Logout' : 'Login' }
          </p>
        </Link>
      </div>
      
    </header>
  )
}

export default index