import { Link } from "react-router-dom"

const Register = () => {
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
          <form action="/login" className="max-sm:w-5/6 max-md:w-3/4 max-lg:w-3/5 w-1/2 flex flex-col justify-start">
            <label className="text-[#696F79] mb-1" htmlFor="name">Name</label>
            <input type="text" className="w-full border border-[#8692A6] rounded p-3 mb-4 text-sm focus:drop-shadow  focus:outline-primary" id="name" placeholder="Enter your name"/>
            
            <label className="text-[#696F79] mb-1" htmlFor="email">Email address</label>
            <input type="text" className="w-full border border-[#8692A6] rounded p-3 mb-3 text-sm focus:drop-shadow focus:outline-primary" id="email" placeholder="Enter email address"/>
            
            <label className="text-[#696F79] mb-1" htmlFor="phone">Phone Number</label>
            <input type="text" className="w-full border border-[#8692A6] rounded p-3 mb-3 text-sm focus:drop-shadow focus:outline-primary" id="phone" placeholder="08xxxxxxxxxx"/>

            <label className="text-[#696F79] mb-1" htmlFor="password">Create New Password</label>
            <input type="text" className="w-full border border-[#8692A6] rounded p-3 mb-3 text-sm focus:drop-shadow focus:outline-primary" id="password" placeholder="Create New Password"/>

            <label className="text-[#696F79] mb-1" htmlFor="password2">New Password</label>
            <input type="text" className="w-full border border-[#8692A6] rounded p-3 mb-3 text-sm focus:drop-shadow focus:outline-primary" id="password2" placeholder="New Password"/>

            <div className="flex flex-row gap-x-3 mb-7">
              <input type="checkbox" name="terms" id="cb-terms" className="accent-primary mb-0.5 w-4"/>
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