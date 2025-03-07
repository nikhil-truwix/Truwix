import React from "react";
import project from "../../assets/project.svg";
import { MdArrowOutward } from "react-icons/md";
function Boxsection() {
  return (
    <div className="w-full flex flex-col py-8 md:py-16 bg-black px-3 sm:px-10 lg:px-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3 w-full">
          <button className="w-[120px] h-[36px] bg-gray-800 border border-gray-800 text-[#E1BBFB] cursor-pointer rounded-full flex items-center justify-center gap-2 px-2">
            <img src={project} alt="project" className="w-5 h-5" />
            <span>Project</span>
          </button>
          <h1 className="text-2xl sm:text-4xl md:text-[70px] font-bold pt-5 text-white px-2 sm:px-5 leading-tight">
            Look at Our Featured Project
          </h1>
        </div>

        <div className="md:w-1/3 w-full flex flex-col gap-4 justify-start">
          <p className="text-white text-sm sm:text-base md:text-lg px-2 ">
            Uncover the strategy, design, and innovation that made this project a standout achievement.
          </p>
          <button className="w-[150px] h-[50px] bg-[#E1BBFB] text-black  rounded-full flex items-center justify-center text-base sm:text-lg ">
            Explore more
            <span><MdArrowOutward size={20} /></span>
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="w-full md:w-2/3 h-[459px] sm:h-[450px] md:h-[650px] bg-white rounded-3xl"></div>

        <div className="flex flex-col gap-4 md:w-1/3 w-full ">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] bg-white rounded-3xl"></div>
          <h1 className="text-[#E1BBFB] text-lg sm:text-xl md:text-2xl px-3">Conversion Optimization</h1>
          <div className="text-white text-[20px] sm:text-3xl md:text-4xl font-semibold px-3">
            <p>Conversion</p>
            <p>Optimization</p>
            <p>Campaign</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Boxsection;
