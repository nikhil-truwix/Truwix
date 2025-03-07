import React from 'react'
import icon from "../../assets/Vector1.png";
function Section2() {
  return (
    <div className="flex flex-col  md:px-16 py-8 ">
             {/* Top Section */}
             <div className="flex flex-col md:flex-row w-full pb-10 px-5 gap-8">
               {/* Left Section - Image/Box */}
               <div className="w-full md:w-1/2 flex justify-center">
                 <div className="w-full md:w-[545px] h-[300px] md:h-[642px] rounded-3xl bg-amber-50"></div>
               </div>
       
               {/* Right Section - Content */}
               <div className="w-full md:w-1/2 flex flex-col md:px-5">
                 <button className="w-32 h-9 bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center">
                   Why Us
                 </button>
       
                 <h1 className="text-white text-2xl md:text-[51px] font-bold mt-4">
                   COMPANY CULTURE
                 </h1>
       
                 {/* Culture Points */}
                 {[
                   "Innovative Spirit",
                   "Collaboration",
                   "Continuous Learning",
                 ].map((title, index) => (
                   <div key={index} className="pt-6">
                     <span className="text-[20px] text-[#E1BBFB]">{title}</span>
                     <p className="text-[18px] text-white mt-2">
                       We thrive on creativity and encourage out-of-the-box thinking.
                       Our team is dedicated to pushing boundaries and exploring new
                       possibilities in digital marketing.
                     </p>
                     <hr className="border border-white mt-4" />
                   </div>
                 ))}
               </div>
             </div>
       
             {/* Bottom Section - Team */}
             {/* <div className="w-full flex flex-col items-center mt-6 text-center">
               <button className="w-36 h-9 bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center gap-2">
                 <img src={icon} alt="Team Icon" className="h-5 w-5" />
                 OUR TEAM
               </button>
       
               <h1 className="text-white text-2xl md:text-[72px] font-bold mt-4">
                 Open Roles in Truwix
               </h1>
               <span className="text-white text-lg md:text-[20px] max-w-xl">
                 Explore exciting career opportunities and find the perfect role to
                 advance your career.
               </span>
             </div> */}
           </div>
  )
}

export default Section2