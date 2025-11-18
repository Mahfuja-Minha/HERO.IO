import { Github } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm py-4 lg:px-20">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/app">App</NavLink>
            </li>
            <li>
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link  className="flex items-center justify-center gap-1" to={'/'}>
          <img className="w-12 md:w-15" src={"/logo.png"} alt="" />
          <h1 className="font-bold text-2xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </h1>
          </Link>
          
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 gap-8 hidden lg:flex">
          <li>
            <NavLink to="/" className={"font-semibold"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/app" className={"font-semibold"}>
              App
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={"font-semibold"}>
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/Mahfuja-Minha" target="#">
          <button className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white hover:scale-105 transition ease-in-out">
            <Github />
            <p className=" font-semibold">Contribute</p>
          </button>
        </a>

        {/* <a href="https://github.com/Mahfuja-Minha" target="#" className=" font-semibold">
          Contribute
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
