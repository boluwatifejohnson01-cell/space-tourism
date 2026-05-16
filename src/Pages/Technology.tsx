import React, { useEffect, useState } from "react";
import type { Technology } from "../typescrip/types";
import SpaceData from "../data.json";
import { motion } from "framer-motion";
import { GiClick } from "react-icons/gi";

const Technology = () => {
  const allTech = SpaceData.technology as Technology[];

  const [currentTech, setCurrentTech] = useState<number>(0);

  const eachTech = allTech[currentTech];

  return (
    <section
      className="w-full py-5 sm:py-0 sm:overflow-hidden
      sm:h-232 flex justify-center bg-cover bg-no-repeat bg-center bg-[url('public/background-technology-mobile.jpg')] sm:bg-[url('public/background-technology-desktop.jpg')] md:bg-[url('public/background-technology-desktop.jpg')] transition-all ease-in-out origin-top pt-20 sm:pt-30 md:pt-40 mx-auto"
    >
      <div className=" w-93.75 sm:w-3xl md:w-360 flex flex-col items-center gap-12 sm:items-start md:ms-30">
        <p className="text-white font-medium uppercase text-[16px] font-[Barlow] tracking-widest sm:ps-9 flex gap-6 sm:text-[20px] md:ps-0 md:text-[28px]">
          <span className="text-white/25">03</span>SPACE LAUNCH 101
        </p>

        <div className="flex flex-col items-center gap-14 md:flex-row-reverse md:mt-20 md:gap-5">
          <motion.img
            key={eachTech.name}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={eachTech.images.portrait}
            alt=""
            className="w-full max-w-75 md:max-w-125"
          />

          <div className="w-81.75 sm:w-172 flex flex-col items-center gap-12 md:items-start">
            <div className="flex flex-col-reverse gap-7 md:items-start md:flex-row-reverse md:gap-8">
              <div>
                <div className="flex flex-col gap-3 md:gap-0 md:items-start">
                  <p className="text-white/50 font-normal font-[Bellefair] text-[18px] sm:text-[24px] md:text-[32px] uppercase">
                    THE TERMINOLOGY…{" "}
                  </p>
                  <motion.p
                    key={eachTech.name}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white font-normal font-[Bellefair] text-[24px] sm:text-[40px] md:text-[56px] uppercase"
                  >
                    {eachTech.name}
                  </motion.p>
                </div>

                <motion.p
                  key={eachTech.name}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#D0D6F9] font-normal font-[Barlow] text-[15px] sm:text-[16px] md:text-[18px] leading-[180%] sm:px-22 md:px-0 md:pe-20 md:text-left"
                >
                  {eachTech.description}
                </motion.p>
              </div>

              <div className="flex md:flex-col gap-3 md:gap-8 items-center justify-center">
                <div
                  onClick={() => {
                    setCurrentTech(0);
                  }}
                  className={`w-10 h-10 md:w-20 md:h-20 rounded-full border border-white flex justify-center items-center cursor-pointer ${currentTech === 0 ? "bg-white" : "bg-transparent"}`}
                >
                  <p
                    className={`text-xl md:text-2xl font-medium font-[Bellefair] ${currentTech === 0 ? "text-[#0B0D17]" : "text-[#FFFFFF]"}`}
                  >
                    1
                  </p>
                </div>

                <div
                  onClick={() => {
                    console.log("clicked");

                    setCurrentTech(1);
                  }}
                  className={`w-10 h-10 md:w-20 md:h-20 rounded-full border border-white flex justify-center items-center cursor-pointer ${currentTech === 1 ? "bg-white" : "bg-transparent"}`}
                >
                  <p
                    className={`text-xl md:text-2xl font-medium font-[Bellefair] ${currentTech === 1 ? "text-[#0B0D17]" : "text-[#FFFFFF]"}`}
                  >
                    2
                  </p>
                </div>
                <div
                  onClick={() => {
                    setCurrentTech(2);
                  }}
                  className={`w-10 h-10 md:w-20 md:h-20 rounded-full  border border-white flex justify-center items-center cursor-pointer ${currentTech === 2 ? "bg-white" : "bg-transparent"}`}
                >
                  <p
                    className={`text-xl md:text-2xl font-medium font-[Bellefair]  ${currentTech === 2 ? "text-[#0B0D17]" : "text-[#FFFFFF]"}`}
                  >
                    3
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
