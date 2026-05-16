import React, { useState } from "react";
import type {} from "../typescrip/types";
import type { Destinations } from "../typescrip/types";
import SpaceData from "../data.json";
import { motion } from "framer-motion";

const Destination: React.FC = () => {
  const allDestinations = SpaceData.destinations as Destinations[];

  const [currentDes, setCurrentDes] = useState<number>(0);

  const eachDes = allDestinations[currentDes];

  return (
    <section className="w-full sm:h-232 flex bg-cover bg-no-repeat bg-center bg-[url('public/background-destination-mobile.jpg')] sm:bg-[url('public/background-destination-tablet.jpg')] md:bg-[url('public/background-destination-desktop.jpg')] justify-center pt-16 sm:pt-30 md:pt-40">
      <div className="w-81.75 sm:w-172 md:w-278 flex flex-col items-center gap-9 sm:items-start">
        <p className="text-white font-normal uppercase text-[16px] font-[Barlow] tracking-widest flex gap-6 sm:text-[20px]">
          <span className="text-white/25">01</span>PICK YOUR DESTINATION
        </p>

        <div className="flex flex-col items-center gap-14 md:flex-row md:mt-20 md:gap-30">
          <motion.img
            key={eachDes.name}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
            src={eachDes.images.png}
            alt=""
            className="w-full max-w-75 md:max-w-125"
          />

          <div className="flex flex-col items-center gap-9 md:items-start">
            <div className="flex gap-8">
              <a
                href="#"
                onClick={() => {
                  setCurrentDes(0);
                }}
                className="relative cursor-pointer group transition-colors"
              >
                <p className="text-white font-normal uppercase text-[14px] sm:text-[16px] font-[Barlow] tracking-wider flex gap-3 group">
                  Moon
                </p>
                <span
                  className={`absolute -bottom-4 right-0 h-0.5 w-10 sm:w-12  bg-white
              group-hover:scale-x-100 transition-all ease-in-out origin-left duration-500 ${currentDes === 0 ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>

              <a
                href="#"
                onClick={() => {
                  setCurrentDes(1);
                }}
                className="relative cursor-pointer group transition-colors"
              >
                <p className="text-white font-normal uppercase font-[Barlow] text-[14px] sm:text-[16px] tracking-wider flex gap-3 ">
                  mars
                </p>
                <span
                  className={`absolute -bottom-4 right-0 h-0.5 w-9 sm:w-11 bg-white
              transition-all group-hover:scale-x-100 ease-in-out origin-left duration-500 ${currentDes === 1 ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>

              <a
                href="#"
                onClick={() => {
                  setCurrentDes(2);
                }}
                className="relative cursor-pointer group transition-colors"
              >
                <p className="text-white font-normal uppercase font-[Barlow] text-[14px] sm:text-[16px] tracking-wider flex gap-3 ">
                  Europa
                </p>
                <span
                  className={`absolute -bottom-4 right-0 h-0.5 w-14 sm:w-16 bg-white
              group-hover:scale-x-100 ease-in-out origin-left transition-all duration-500 ${currentDes === 2 ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>

              <a
                href="#"
                onClick={() => {
                  setCurrentDes(3);
                }}
                className="relative cursor-pointer group transition-colors"
              >
                <p className="text-white font-normal uppercase font-[Barlow] text-[14px] sm:text-[16px] tracking-wider flex gap-3 ">
                  Titan
                </p>
                <span
                  className={`absolute -bottom-4 right-0 h-0.5 w-10 sm:w-11 bg-white
              transition-all ease-in-out origin-left group-hover:scale-x-100 duration-500 ${currentDes === 3 ? "scale-x-100" : "scale-x-0"}`}
                />
              </a>
            </div>

            <div className="flex flex-col gap-3 md:items-start">
              <motion.h2
                key={eachDes.description}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white font-normal uppercase font-[Bellefair] text-[56px] sm:text-[80px]"
              >
                {eachDes.name}
              </motion.h2>

              <motion.p
                key={eachDes.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#D0D6F9] font-normal font-[Barlow] text-[15px] sm:text-[16px] leading-[180%] px-4 sm:px-22 md:px-0 md:text-left md:pe-30"
              >
                {eachDes.description}
              </motion.p>
            </div>

            <span className="w-90 h-0.5 sm:w-130 md:w-100 bg-[#979797]" />

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-30 ">
              <div className="flex flex-col gap-3">
                <p className="text-[#D0D6F9] font-normal uppercase font-[Barlow] text-[14px]">
                  AVG. DISTANCE
                </p>
                <p className="text-white font-normal uppercase font-[Bellefair] text-[28px]">
                  {eachDes.distance}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[#D0D6F9] font-normal uppercase font-[Barlow] text-[14px]">
                  Est. travel time
                </p>
                <p className="text-white font-normal uppercase font-[Bellefair] text-[28px]">
                  {eachDes.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
