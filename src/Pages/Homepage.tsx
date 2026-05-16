import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="absolute w-full top-0 flex justify-center h-full bg-cover bg-center bg-no-repeat  bg-[url('public/background-home-mobile.jpg')] sm:bg-[url('public/background-home-tablet.jpg')] md:bg-[url('public/background-home-desktop.jpg')] sm:h-232  md:h-222 md:flex md:items-end md:justify-center">
      <div className="flex w-93.75 sm:w-3xl flex-col gap-14 pt-25 items-center sm:gap-15 sm:py-32 md:flex-row md:w-277.5 md:h-158 md:gap-85">
        <div className="flex flex-col gap-6 items-center md:items-start">
          <p className="text-[16px] sm:text-[26px] font-normal text-[#D0D6F9] font-[Barlow] tracking-wider sm:tracking-wider uppercase">
            so, you want to travel to
          </p>
          <motion.h1
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[80px] sm:text-[144px] font-normal text-white font-[Bellefair] tracking-normal uppercase"
          >
            space
          </motion.h1>
          <p className="text-[16px] w-81.75 sm:w-lg font-normal text-[#D0D6F9] font-[Barlow] tracking-tight leading-[180%] md:px-0 md:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/Destination"
          className="flex justify-center items-center md:justify-end cursor-pointer hover:ring-88 sm:hover:ring-88 md:hover:ring-88 ring-white/20 rounded-full"
        >
          <p className="w-36 h-36 sm:w-68 sm:h-68 rounded-full bg-white flex items-center justify-center text-[18px] sm:text-[32px] font-normal text-[#0B0D17] font-[Bellefair]">
            EXPLORE
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
