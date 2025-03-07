import React from 'react'
import Icon from "../../assets/Icon.png";
function Section1() {
  return (
     <div className="w-full px-6 md:px-10  py-8">
         {/* Top Section */}
              <div className="flex flex-col md:flex-row w-full gap-6 pb-10">
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col  md:px-20">
                  <button className="w-40 h-9 bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center gap-2">
                    <img src={Icon} alt="Vision Icon" className="h-5 w-5" />
                    Vision & Mission
                  </button>
                  <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-[63px] md:py-6 py-3">
                    Empowering Growth with Innovation
                  </h1>
                </div>
        
                {/* Right Content */}
                <div className="w-full md:w-1/2 flex justify-center md:items-center  md:px-12">
                  <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-center md:text-left md:w-[80%]">
                    We empower brands to achieve remarkable growth through innovative
                    and data-driven digital strategies, delivering measurable results
                    and long-term success.
                  </p>
                </div>
              </div>
     </div>
  )
}

export default Section1