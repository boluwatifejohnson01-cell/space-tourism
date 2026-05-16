import React from "react";
import { NavLink } from "react-router-dom";

interface OpenSlide {
  ForChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ ForChange }: OpenSlide) => {
  return (
    <div className="absolute top-0 right-0">
      <div
        onClick={() => {
          ForChange(false);
        }}
        className={`pt-3 w-60 h-212.5 flex flex-col items-end gap-12 bg-[#0B0D17]/50 shadow-lg backdrop-blur-[80px] ps-6 pe-3 sm:hidden md:hidden`}
      >
        <img
          src="/icon-close.svg"
          alt=""
          className="w-6 z-50 cursor-pointer"
          onClick={() => ForChange(false)}
        />

        <div className="w-full flex flex-col gap-6">
          <NavLink
            to="/"
            className="flex items-center justify-between cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                {" "}
                <p className="text-white font-normal uppercase text-md font-[Barlow] tracking-wider flex gap-3">
                  <span className="font-semibold">00</span>Home
                </p>
                <span
                  className={`h-6 w-0.5 scale-y-0 bg-white
              transition-all ease-in-out origin-top group-hover:scale-y-100 duration-500 ${isActive ? "scale-y-100" : "scale-y-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/Destination"
            className="cursor-pointer group transition-colors flex items-center justify-between"
          >
            {({ isActive }) => (
              <>
                {" "}
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">01</span>Destination
                </p>
                <span
                  className={`h-6 w-0.5 bg-white 
              transition-all ease-in-out origin-top group-hover:scale-y-100 duration-500 ${isActive ? "scale-y-100" : "scale-y-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/Crew"
            className="flex items-center justify-between cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">02</span>Crew
                </p>
                <span
                  className={`h-6 w-0.5 bg-white 
               transition-all ease-in-out origin-top group-hover:scale-y-100 duration-500 ${isActive ? "scale-y-100" : "scale-y-0"}`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/Techlogy"
            className="flex items-center justify-between cursor-pointer group transition-colors"
          >
            {({ isActive }) => (
              <>
                <p className="text-white font-normal uppercase font-[Barlow] text-md tracking-wider flex gap-3 group">
                  <span className="font-semibold">03</span>Technology
                </p>
                <span
                  className={`h-6 w-0.5  bg-white
               transition-all ease-in-out origin-top group-hover:scale-y-100 duration-500 ${isActive ? "scale-y-100" : "scale-y-0"}`}
                />
              </>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
