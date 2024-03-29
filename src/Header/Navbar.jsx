import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    logout()
      .then(() => {
        toast.success("Successfully Logout!");
        navigate("/");
      })
      .catch((err) => toast.error(`${err.message.slice(17).replace(")", "")}`));
  };
  const goRegistration = () => {
    navigate("/Login");
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 px-4">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-6">
        <Link to={"/"} className="flex items-center">
          <img
            src="https://i.postimg.cc/rsDP8skz/Invo-Trust-03.png"
            className="h-9 mr-3"
            alt="InvoTrust logo"
          />
        
        </Link>
        <div className="flex md:order-2">
          {user?.email && user?.emailVerified ? (
            <button
              onClick={logOut}
              type="button"
              className=" translate-y-0 active:translate-y-1 active:duration-300 bg-mainColor normal-case text-sm md:text-base p-2 px-3 md:px-6 md:py-3 rounded mr-2 hover:bg-mainColor border-none font-bold "
            >
              Log out
            </button>
          ) : (
            <button
              onClick={goRegistration}
              type="button"
              className=" translate-y-0 active:translate-y-1 active:duration-300 bg-mainColor normal-case text-sm md:text-base p-2 px-3 md:px-6 md:py-3 rounded mr-2 hover:bg-mainColor border-none font-bold "
            >
              Login
            </button>
          )}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex menuUl flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black  ">
            <Link to={"/"}>
              {" "}
              <li className="block py-2 pl-3 pr-4  text-white hover:text-mainColor font-semibold ">
                Home
              </li>
            </Link>
            <Link to={"/About"}>
              <li className="block py-2 pl-3 pr-4  text-white hover:text-mainColor font-semibold ">
                About
              </li>
            </Link>
            {/* <Link to={"/Packages"}>
              <li className="block py-2 pl-3 pr-4 rounded text-white hover:text-mainColor font-semibold ">
                Packages
              </li>
            </Link> */}
            <Link to={"/Contact"}>
              <li className="block py-2 pl-3 pr-4 rounded text-white hover:text-mainColor font-semibold ">
                Contact
              </li>
            </Link>
            {user?.email && user?.emailVerified ? (
              <Link to={"/Dashboard/Dashboard"}>
                <li className="block py-2 pl-3 pr-4 text-white hover:text-mainColor rounded  font-semibold ">
                  Dashboard
                </li>
              </Link>
            ) : (
              <Link to={"/Blog"}>
                <li className="block py-2 pl-3 pr-4 text-white hover:text-mainColor rounded  font-semibold ">
                  Blog
                </li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
