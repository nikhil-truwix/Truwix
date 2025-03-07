import React from 'react';
import { MdOutlineSettings } from "react-icons/md";
import icon1 from "../../assets/Icon1.svg";
import icon2 from "../../assets/Icon2.svg";
import icon3 from "../../assets/Icon3.svg";
import icon4 from "../../assets/Icon4.svg";
import icon5 from "../../assets/Icon1.svg";

const Services2 = () => {

  const products = [
    {
      name: "Graphic Design",
      image: icon1,
      price: 19.99,
      description: "Engage your audience with compelling content that drives traffic and builds brand loyalty..",
      category: "Electronics",

    },
    {
      name: "App Designing",
      image: icon2,
      price: 29.99,
      description: "Elevate your brand’s presence across social platforms with tailored strategies and impactful campaigns",
      category: "Electronics",

    },
    {
      name: "Brand Awarness",
      image: icon3,
      price: 29.99,
      description: "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
      category: "Electronics",
      rating: 4.5,
    },
    {
      name: "Web Design & Development",
      image: icon4,
      price: 29.99,
      description: "Create a stunning, user-friendly website that reflects your brand and converts visitors into customers.",
      category: "Electronics",
      rating: 4.5,
    },
    {
      name: "Ads Designing",
      image: icon5,
      price: 29.99,
      description: "Boost customer engagement and retention through personalized and effective email campaigns..",
      category: "Electronics",
      rating: 4.5,
    },
    {
      name: "Analytics & Reporting",
      image: icon1,
      price: 29.99,
      description: "Understand what works and what doesn’t. Our data-driven approach  continuous optimized performance..",
      category: "Electronics",
      rating: 4.5,
    },
  ];

  return (
    <>
      <div className="bg-black w-full h-auto text-white py-2">
        {/* Header Section */}
        <div className="flex w-full justify-center">
          <button className="w-[120px] h-[36px] bg-gray-500 text-[#E1BBFB] cursor-pointer rounded-full ml-1 flex items-center justify-center my-4 gap-2">
            <span>
              <MdOutlineSettings size={20} />
            </span>
            Services
          </button>
        </div>

        {/* Title Section */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-[68px] mb-5 font-bold  text-center ">
            Your Path to <span className="text-[#E1BBFB]">Digital</span> Excellence
          </h1>
          <p className="text-sm md:text-[18px] text-center px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16 mt-10   ">
          {products.map((product, index) => (
            <div key={index} className=" card h-auto  rounded-3xl  bg-gradient-to-r from-[#060B21] to-[#0E142F] .. shadow-2xl p-4  " >
              <div className='w-20 h-20 bg-[#090e26] rounded-full border-2  border-[#1a1f34] flex justify-center items-center my-5'>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[32px] h-[32px]   text-start flex justify-center items-center"
                />
              </div>
              <h2 className="text-[24px] font-semibold text-white  mb-1">{product.name}</h2>
              <p className="text-[18px`] mb-5 ">{product.description}</p>
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default Services2;
