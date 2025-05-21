import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout().then(() => {
      navigate("/login");
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/add-roommate">Add to Find Roommate</NavLink>
      </li>
      <li>
        <NavLink to="/browse">Browse Listings</NavLink>
      </li>
      <li>
        <NavLink to="/my-listings">My Listings</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 md:py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn p-0 btn-ghost text-base md:text-xl">RoommateFind</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={user?.photoURL}
              alt=""
              title={user?.displayName}
            />
            <button
              className="btn bg-white text-base text-slate-600 md:px-6 md:py-5 rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 md:gap-6">
            <NavLink
              to="/login"
              className="btn text-base bg-white text-slate-600 md:px-6 md:py-5 rounded-full"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn text-base bg-white text-slate-600 md:px-6 md:py-5 rounded-full"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
