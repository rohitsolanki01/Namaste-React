import { useEffect, useState } from "react";
import logo from "../assets/LogoOfChtora.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");


  const onlineStatus = useOnlineStatus();

  return (
    <>
      <div className="flex justify-between items-center p-3 border-b-2 border-gray-200">
        <div className="nav-item">
          <img className="h-18" src={logo} alt="Brand-Logo" />
        </div>
        <div className="nav-item">
          <ul className="flex space-x-5 mr-5 text-md font-medium">
            <li>
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </li>
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/about" className="cursor-pointer">
              About Us
            </Link>
            <Link to="/contact" className="cursor-pointer">
              Contact
            </Link>
            <Link to="/glosery" className="cursor-pointer">
              Glosery
            </Link>
            <Link to="cart" className="cursor-pointer">
              Cart
            </Link>
            <button
              className="bg-blue-500 text-white rounded-md ml-2 w-20 p-3"
              onClick={() =>
                login == "Login" ? setLogin("Logout") : setLogin("Login")
              }
            >
              {login}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
