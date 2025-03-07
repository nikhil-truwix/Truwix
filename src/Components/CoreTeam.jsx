import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import icon from "../assets/icon6.png";
import image1 from "../assets/Aftab.jpg";
import image2 from "../assets/Mukul.jpg";
import image3 from "../assets/Rishabh.jpg";

const Team = () => {
  
  const teamMembers = [
    { img: image1, founder: "Nishant", designation: "CEO" },
    { img: image2, founder: "Jatin", designation: "CTO" },
    { img: image3, founder: "Tanishka", designation: "Content Writer" },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      founder: "Shalley",
      designation: "Content Strategy Director",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      founder: "Shalley",
      designation: "Content Strategy Director",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      founder: "Shalley",
      designation: "Content Strategy Director",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      founder: "Shalley",
      designation: "Content Strategy Director",
    },
    {
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      founder: "Shalley",
      designation: "Content Strategy Director",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#010916]">
      {/* <div className="pt-6 relative z-50">
        <Navbar />
      </div> */}

      {/* Header Section */}
      <div className="w-full flex justify-center  py-4">
        <button className="w-[120px] h-[36px] bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center gap-2">
          <img src={icon} className="w-5 h-5" />
          OUR Team
        </button>
      </div>

      <h2 className="text-3xl md:text-[62px] font-bold text-white text-center mt-4 md:mt-6">
        Meet Our Core Team
      </h2>

      {/* Team Members Grid */}
      <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-20 pb-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#060b21] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={member.img}
              className="w-full h-[380px] object-cover rounded-t-xl"
              alt={member.founder}
            />
            <div className="p-4 text-center">
              <h3 className="text-xl md:text-2xl text-white font-semibold">
                {member.founder}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                {member.designation}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Team;
