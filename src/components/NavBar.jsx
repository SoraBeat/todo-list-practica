import React from "react";
import Logo from "../images/frontline-logo.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex justify-between items-center mx-auto">
        <img src={Logo} className="mr-3  h-10" alt="Flowbite Logo" />
        <button className="bg-red-700 mt-3 rounded-md py-1 text-white text-lg font-bold p-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
