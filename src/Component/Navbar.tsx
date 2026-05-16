import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLogo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

import Dropdown from "./Dropdown";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  console.log(open);

  return (
    <nav className="fixed z-20 top-0 w-93.75 mx-auto px-4 py-6 sm:w-3xl sm:mx-0 sm:py-0 md:w-360 sm:px-0">
      <div className="flex items-center justify-between sm:ps-6 md:ps-16 md:mt-8 ">
        <Link to="/">
          <img src={NavLogo} alt="" className="w-8 sm:w-10 md:w-10" />
        </Link>

        {/* Mobile view */}
        <div
          onClick={() => {
            setOpen(true);
          }}
          className=" sm:hidden md:hidden cursor-pointer"
        >
          <GiHamburgerMenu className="text-[#D0D6F9] text-4xl" />
        </div>

        {open && <Dropdown ForChange={setOpen} />}

        {/* Tablet view */}
        <div className="bg-white/5 h-20 items-center gap-6 pe-14 ps-25 pt-2 hidden sm:flex md:hidden">
          {" "}
          <NavLink
            to="/"
            className="relative cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase text-md font-[Barlow] tracking-wider flex gap-3">
                  <span className="font-semibold">00</span>Home
                </p>
                <span
                  className={`absolute -bottom-6 right-0 h-0.5 w-20  bg-white
              transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Destination"
            className="relative cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">01</span>Destination
                </p>
                <span
                  className={`absolute -bottom-6 right-0 h-0.5 w-33 bg-white 
              transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Crew"
            className="relative cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">02</span>Crew
                </p>
                <span
                  className={`absolute -bottom-6 right-0 h-0.5 w-20 bg-white
               transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/Techlogy"
            className="relative cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">03</span>Technology
                </p>
                <span
                  className={`absolute -bottom-6 right-0 h-0.5 w-33  bg-white
               transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                />
              </>
            )}
          </NavLink>
        </div>

        {/* Desktop View */}

        <span className="hidden sm:hidden md:block absolute left-38 bg-white/5 w-130 h-0.5" />
        <div className="hidden md:flex">
          <div className="bg-white/5 h-20 items-center gap-16 pe-14 ps-35 pt-2 hidden md:flex">
            <NavLink
              to="/"
              className="relative cursor-pointer group transition-colors"
            >
              {({ isActive }) => (
                <>
                  {" "}
                  <p className="text-white font-normal uppercase text-md font-[Barlow] tracking-wider flex gap-3">
                    <span className="font-semibold">00</span>Home
                  </p>
                  <span
                    className={`absolute -bottom-6 right-0 h-0.5 w-20  bg-white
              transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/Destination"
              className="relative cursor-pointer group transition-colors"
            >
              {({ isActive }) => (
                <>
                  <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                    <span className="font-semibold">01</span>Destination
                  </p>
                  <span
                    className={`absolute -bottom-6 right-0 h-0.5 w-33  bg-white
              transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/Crew"
              className="relative cursor-pointer group transition-colors"
            >
              {({ isActive }) => (
                <>
                  <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                    <span className="font-semibold">02</span>Crew
                  </p>
                  <span
                    className={`absolute -bottom-6 right-0 h-0.5 w-20  bg-white
             transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
            </NavLink>

            <NavLink
              to="/Techlogy"
              className="relative cursor-pointer group transition-colors"
            >
              {({ isActive }) => (
                <>
                  <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                    <span className="font-semibold">03</span>Technology
                  </p>
                  <span
                    className={`absolute -bottom-6 right-0 h-0.5 w-33  bg-white
               transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  />
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
