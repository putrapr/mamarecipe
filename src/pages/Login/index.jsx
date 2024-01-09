import { Link } from "react-router-dom"
import Input from "../../components/base/Input"

const Login = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="w-full flex 
        max-sm:justify-center max-sm:items-center max-sm:h-screen max-sm:bg-[url('img/login/bg.svg')] max-sm:bg-cover max-sm:bg-center">
        <div className="max-sm:hidden w-1/2 flex justify-center items-center h-screen 2xl:h-[1536px] bg-[url('img/login/bg.svg')] bg-cover bg-center">
          <img src="img/login/logo.svg" width="20%" alt="logo" className=" mt-4 mb-4"/>
        </div>
      
        <div className="w-1/2 flex flex-col justify-center items-center
        max-sm:w-5/6 max-sm:bg-white max-sm:opacity-90 max-sm:rounded-md">
          <h3 className="max-sm:hidden text-primary text-2xl mt-4 mb-4 font-bold">Welcome</h3>
          <img src="img/login/logo-yellow.svg" width="20%" alt="logo" className="sm:hidden mt-4 mb-4"/>
          <p className="text-[#8692A6] mb-6">Log in into your exiting account</p>
            <form action="/" className="w-1/2 max-sm:w-4/5 max-lg:w-3/4  flex flex-col justify-start">
              <label className="text-[#696F79] mb-1" htmlFor="email">Email</label>
              <Input type="text" id="email" placeholder="examplexxx@gmail.com"/>
              
              <label className="text-[#696F79] mb-1" htmlFor="password">Password</label>
              <Input type="password" id="password" placeholder="Password"/>
              
              <div className="flex flex-row gap-x-3 mb-7">
                <input type="checkbox" name="terms" id="cb-terms" className="accent-primary mb-0.5 w-4"/>
                <label htmlFor="cb-terms" className="text-[#696F79]">I agree to terms & conditions</label>
              </div>

              <button type="submit" className="w-full bg-primary mb-3 rounded-md py-3 text-white">Log in</button>
              
              <div className="w-full flex justify-end">
                <Link to="#" className="text-xs text-[#999999]">Forgot Password ?</Link>
              </div>          
            </form>
            <p className="text-[#999999] text-sm mt-5 mb-5">Don’t have an account? 
              <Link to="../register" className="text-primary font-bold">Sign Up</Link> 
            </p>
        </div>
      </div>
    </div>
  )
}

export default Login