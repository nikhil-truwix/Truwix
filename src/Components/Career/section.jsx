import React from "react";
import Icon from "../../assets/Icon.png";
import Icon2 from "../../assets/Vector2.png";
import Icon3 from "../../assets/Vector5.png";

function Aboutgrowth() {
  return (
    <div className="w-full px-4 md:px-10 md:py-12  py-8">
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
          <p className="text-gray-600 text-lg md:text-xl lg:text-2xl text-center md:text-left">
            We empower brands to achieve remarkable growth through innovative
            and data-driven digital strategies, delivering measurable results
            and long-term success.
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10">
        {/* Vision */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xl bg-gradient-to-r from-[#0E142F] to-[#060B21] rounded-3xl p-6 md:p-10">
            <h1 className="text-white font-bold text-3xl md:text-[58px] pb-4">
              Our VISION
            </h1>
            <div className="flex items-start gap-4">
              <p className="text-white text-lg md:text-xl leading-relaxed flex-1 px-2 ">
                To be the leading digital marketing agency that empowers brands
                to achieve unprecedented visibility and growth through
                innovative and data-driven strategies.
              </p>
              <div className=" flex flex-col justify-center items-center">
                <img src={Icon2} alt="Vision Icon" className="h-12 w-12  " />
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xl bg-gradient-to-r from-[#0E142F] to-[#060B21] rounded-3xl p-6 md:p-10">
            <h1 className="text-white font-bold text-3xl md:text-[58px] pb-4">
              Our MISSION
            </h1>
            <div className="flex items-start gap-4">
              <p className="text-white text-lg md:text-xl leading-relaxed flex-1 px-2">
                Our mission is to deliver exceptional digital marketing
                solutions that drive measurable results, enhance brand presence,
                and foster long-term success for our clients.
              </p>
              <img src={Icon3} alt="Mission Icon" className="h-12   w-12  object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutgrowth;
