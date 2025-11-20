import logo from "../assets/LogoOfChtora.png"

const Header = () => {
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
            </ul>
        </div>
    </div>
   </>
  )
}

export default Header