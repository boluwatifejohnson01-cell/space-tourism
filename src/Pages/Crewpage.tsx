import React, { useEffect, useState } from "react";
// import CrewAMob from "../assets/Crew Image - A.png";
// import CrewATab from "../assets/Crew Image - A1.png";
// import CrewADesk from "../assets/Crew Image - A2.png";
import type { Crew } from "../typescrip/types";
import SpaceAllData from "../data.json";
import { motion } from "framer-motion";

const Crewpage = () => {
  const crewData = SpaceAllData.crew as Crew[];

  const [currentCrew, setCurrentCrew] = useState(0);

  const selectedCrew = crewData[currentCrew];

  console.log(selectedCrew.images.png);

  return (
    <section
      className="w-full py-5 sm:py-0 sm:overflow-hidden
    sm:h-full flex bg-cover bg-no-repeat bg-center bg-[url('/background-crew-mobile.jpg')] sm:bg-[url('/background-crew-tablet.jpg')] md:bg-[url('/background-crew-desktop.jpg')]
     justify-center pt-25 sm:pt-30 md:pt-40"
    >
      <div className="w-81.75 sm:w-172 md:w-278 flex flex-col items-center gap-12 sm:items-start">
        <p className="text-white font-normal uppercase text-[16px] font-[Barlow] tracking-widest flex gap-6 sm:text-[20px]">
          <span className="text-white/25">02</span>MEET YOUR CREW
        </p>

        <div className="flex flex-col-reverse items-center gap-14 md:flex-row-reverse md:mt-20 md:gap-5">
          <motion.img
            key={selectedCrew.name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={selectedCrew.images.png}
            alt=""
            className="transition  w-full max-w-75 md:max-w-125"
          />

          <div className="flex flex-col items-center gap-12 md:items-start">
            <div className="flex flex-col gap-7 md:items-start">
              <div className="flex flex-col gap-3 md:items-start">
                <p className="text-white/50 font-normal font-[Bellefair] text-[18px] sm:text-[24px] md:text-[32px] uppercase">
                  {selectedCrew.role}
                </p>
                <motion.p
                  key={selectedCrew.name}
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-white font-normal md:text-left leading-16 font-[Bellefair] text-[24px] sm:text-[40px] md:text-[56px] uppercase"
                >
                  {selectedCrew.name}
                </motion.p>
              </div>

              <motion.p
                key={selectedCrew.name}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[#D0D6F9] font-normal font-[Barlow] text-[15px] sm:text-[16px] md:text-[18px] leading-[180%] sm:px-22 md:px-0 md:text-left"
              >
                {selectedCrew.bio}
              </motion.p>

              <div className="flex gap-3 items-center justify-center">
                {crewData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentCrew(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                      currentCrew === index
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crewpage;
