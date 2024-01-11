import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/base/Input"
import axios from 'axios'

const Register = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pass = e.target.password.value;
    const pass2 = e.target.password2.value;
    if (pass != pass2)
     return alert("Password Not Same")

    const data = {
      email: e.target.email.value,
      password: pass,
      name: e.target.name.value,
      phone: e.target.phone.value,
      image: 'default.jpg',
      role: 'user'
    }
    
    try {
      await axios.post(`${BASE_URL}/user`, data)
      alert('Account Registered')
      navigate('/login')
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <div className="2xl:container 2xl:mx-auto">   
      <div className="w-full flex max-sm:justify-center max-sm:items-center
        max-sm:h-auto max-sm:bg-[url('img/login/bg.svg')] max-sm:bg-cover max-sm:bg-center">
        <div className="max-sm:hidden w-1/2 flex justify-center items-center h-auto bg-[url('img/login/bg.svg')] bg-cover bg-center">
          <img src="img/login/logo.svg" width="20%" alt="logo" className=" mt-4 mb-4"/>
        </div>
      
        <div className="w-1/2 flex flex-col justify-center items-center my-10
          max-sm:w-5/6 max-sm:bg-white max-sm:opacity-90 max-sm:rounded-md" >
          <h3 className="max-sm:hidden text-primary text-2xl mt-4 mb-4 font-bold">Let’s Get Started !</h3>
          <img src="img/login/logo-yellow.svg" width="20%" alt="logo" className="sm:hidden mt-4 mb-4"/>
          <p className="text-[#8692A6] mb-6 max-sm:text-center max-sm:mx-5">Create new account to access all features</p>
          <form onSubmit={handleSubmit} className="max-sm:w-5/6 max-md:w-3/4 max-lg:w-3/5 w-1/2 flex flex-col justify-start">
            <label className="text-[#696F79] mb-1" htmlFor="name">Name</label>
            <Input type="text" name="name" id="name" placeholder="Enter your name" />
            
            <label className="text-[#696F79] mb-1" htmlFor="email">Email address</label>
            <Input type="email" name="email" id="email" placeholder="Enter email address" />
            
            <label className="text-[#696F79] mb-1" htmlFor="phone">Phone Number</label>
            <Input type="number" name="phone" id="phone" placeholder="08xxxxxxxxxx" />
            
            <label className="text-[#696F79] mb-1" htmlFor="password">Create New Password</label>
            <Input type="password" name="password" id="password" placeholder="Create New Password" />
            
            <label className="text-[#696F79] mb-1" htmlFor="password2">New Password</label>
            <Input type="password" name="password2" id="password2" placeholder="New Password" />
            
            <div className="flex flex-row gap-x-3 mb-7">
              <input type="checkbox" name="terms" id="cb-terms" className="accent-primary mb-0.5 w-4" required/>
              <label htmlFor="cb-terms" className="text-[#696F79]">I agree to terms & conditions</label>
            </div>

            <button type="submit" className="w-full bg-primary mb-3 rounded-md py-3 text-white">Register Account</button>         
          </form>
          <p className="text-[#999999] text-sm mt-5 mb-5">Already have account? 
            <Link to="/login" className="text-primary font-bold">Log in Here</Link> 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register