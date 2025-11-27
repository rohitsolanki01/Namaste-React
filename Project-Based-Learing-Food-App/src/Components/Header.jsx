import { useState } from "react"
import logo from "../assets/LogoOfChtora.png"

const Header = () => {

    const [login ,setLogin] = useState("Login")
  return (
   <>
    <div className='flex justify-between items-center p-3 border-b-2 border-gray-200'>
        <div className='nav-item'>
            <img  className="h-18" src={logo} alt="Brand-Logo" />
        </div>
        <div className="nav-item">
            <ul className="flex space-x-5 mr-5 text-md font-medium">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About Us</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Cart</li>
                <button className="bg-blue-500 text-white rounded-md ml-2 w-20 p-3" onClick={() => {
                    login === "Login" ? setLogin("LogOut") : setLogin("Login");
                }}>{login}</button>
            </ul>
        </div>
    </div>
   </>
  )
}

export default Header