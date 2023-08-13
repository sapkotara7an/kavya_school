import { useState } from "react"
import { FaHome } from "react-icons/fa"
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
   
  
    return (
        <>

        <div className=" text-center" style={{padding:'200px 0px'}}>
        <h4>404 Page Not Found!!</h4>
       <NavLink to='/'> <p className="mt-4"><FaHome className="text-white bg-success  me-2"/>Return to Home page</p></NavLink>
        </div>

        </>
    )
}


export default ErrorPage;