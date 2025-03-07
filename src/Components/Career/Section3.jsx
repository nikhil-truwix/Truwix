import React from "react";
import { Link } from "react-router-dom";
function Section3() {

  const products = [
    {
      buttonLabel: "Marketing",
      name: "Marketing Specialist",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Experience a dynamic and inspiring workplace where innovation thrives, creativity is valued, and fresh ideas are encouraged to shape a successful career.",
      category: "Marketing",
    },
    {
      buttonLabel: "SEO",
      name: "SEO Analyst",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Elevate your brand’s presence across social platforms with tailored strategies and impactful campaigns.",
      category: "SEO",
    },
    {
      name: "Content Writer",
      buttonLabel: "Content",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
      category: "Content",
      Link: "/contact1",
    },
    {
      name: "Content Writer",
      buttonLabel: "Content",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
      category: "Content",
    },
    {
      name: "Content Writer",
      buttonLabel: "Content",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
      category: "Content",
    },
    {
      name: "Content Writer",
      buttonLabel: "Content",
      location: ["Fulltime", "Office", "Delhi"],
      description:
        "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
      category: "Content",
    },
  ];

  return (
    <div className="w-full px-4 md:px-20 mt-2 md:mb-10 py-10 md:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Link to="/Careerpage"
            key={index}
            className="h-auto rounded-3xl bg-gradient-to-r from-[#060B21] to-[#0E142F] border-2 border-[#E1BBFB] shadow-2xl p-6 transition-transform duration-300 hover:scale-105"
            style={{ boxShadow: "inset 0 0 6px #E1BBFB" }}
          >
            <Link to="/Careerpage"> <div className="w-[100px] rounded-3xl bg-[#e1bbfb] border flex justify-center items-center my-4">
              <Link to="/careerpage"> <button className="px-3 py-1 text-sm font-medium">
                {product.buttonLabel}
              </button></Link>
            </div>
            </Link>

            <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
              {product.name}
            </h2>
            <div className="flex flex-wrap gap-4 text-white text-sm mt-2">
              {product.location.map((item, index) => (
                <span key={index} className="text-gray-300">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-3">{product.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Section3;
