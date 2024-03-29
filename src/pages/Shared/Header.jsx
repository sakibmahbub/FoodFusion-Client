import React, { useContext, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" px-4 py-5 bg-red-50 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-24 relative rounded-lg z-20">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <h1 className="ml-2 text-3xl font-bold tracking-wide text-gray-800">
            Food<span className="text-secondary">Fusion</span>
          </h1>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center font-semibold hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={
                location.pathname === "/" ? "text-secondary" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={
                location.pathname === "/blog" ? "text-secondary" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            {user && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    title={user.displayName}
                  />
                </div>
              </label>
            )}
          </li>
          <li>
            {user && (
              <button
                className="btn btn-secondary btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {!user && (
              <Link to="/login">
                <button className="btn btn-secondary btn-sm">Login</button>
              </Link>
            )}
          </li>
        </ul>

        {/* Mobile Navbar Section */}
        <AuthContext.Provider value={{ user }}>
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-8 text-gray-600" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-white border rounded shadow-sm">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Food
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className="w-8 text-red-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link to="/" className="default">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </AuthContext.Provider>
      </div>
    </div>
  );
};

export default Header;
