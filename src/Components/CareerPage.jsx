import React from 'react'
import Navbar from '../Components/Navbar'
import { MdNorthEast } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import CoreTeam from '../Components/CoreTeam'
import { useEffect } from "react"
const CareerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        {
            name: "Marketing Specialist",

            Button: "Marketing",
            location: [".Fulltime", ".Office", ".Delhi"],
            description: "Experience a dynamic and inspiring workplace where innovation thrives, creativity is valued, and fresh ideas are encouraged to shape a successful..",
            category: "Marketing",

        },
        {
            name: "SEO Analyst",
            Button: "SEO",
            location: [".Fulltime", ".Office", ".Delhi"],
            description: "Elevate your brand’s presence across social platforms with tailored strategies and impactful campaigns.",
            category: "Electronics",

        },
        {
            name: "Content Writer",
            Button: "Content",
            location: [".Fulltime", ".Office", ".Delhi"],
            description: "Drive targeted traffic to your site with cost-effective pay-per-click advertising solutions.",
            category: "Electronics",
            rating: 4.5,
        },


    ];
    return (
        <div className='w-full h-auto bg-[#010916]'>
            <div className="pt-6 relative z-50">
                <Navbar />
            </div>
            <div className='flex flex-col items-center justify-center pt-12  md:py-16 px-10'>
                <h1 className='items-center text-[18px]  font-semi-bold'><span className='text-[#6D6D6D]'>Career</span> <span className='text-[#6D6D6D]'> / </span> <span className='text-[#E1BBFB]'>Marketing Specialists</span></h1>
                <h1 className=' text-white text-3xl md:text-5xl font-bold'>Marketing Specialists</h1>
                <h1 className='text-[#6D6D6D] pt-4'>Explore an exciting opportunity to drive impactful marketing campaigns, optimize strategies, and grow with the AdVibe team.</h1>

            </div>
            <div className='flex flex-col md:flex-row items-center justify-center px-4 md:px-20 gap-4 md:gap-20 py-5 lg:py-20'>
                <div className='md:w-1/2 w-full h-auto text-white'>
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-100 mb-2">Job Overview</h2>
                        <p className="text-gray-300">
                            Explore an exciting opportunity to drive impactful marketing campaigns,
                            optimize strategies, and grow with the AdVibe team.
                        </p>
                    </div>

                    {/* Job Responsibilities */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-100 mb-1">Job Responsibilities</h2>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            <li>Develop and implement marketing campaigns to drive brand awareness and lead generation.</li>
                            <li>Manage social media accounts and create engaging content.</li>
                            <li>Analyze marketing metrics and adjust strategies based on performance data.</li>
                            <li>Collaborate with design and content teams to create effective marketing materials.</li>
                            <li>Conduct market research to identify new opportunities and trends.</li>
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h2 className="text-xl font-bold text-gray-100 mb-2">Requirements</h2>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            <li>Bachelor's degree in Marketing, Business, or a related field.</li>
                            <li>2+ years of experience in digital marketing or a similar role.</li>
                            <li>Strong understanding of social media platforms and marketing tools.</li>
                            <li>Excellent communication and organizational skills.</li>
                            <li>Ability to work independently and as part of a team.</li>
                        </ul>
                    </div>
                </div>
                <div className='md:w-1/2  w-full h-auto '>
                    <div className="grid grid-cols-2 gap-y-3 text-white ">
                        <div className=" px-4 py-3 font-semibold border-b ">Employment Type:</div>
                        <div className="px-4 py-3 border-b">Full Time</div>

                        <div className="px-4 py-3 font-semibold border-b">Working Type:</div>
                        <div className="px-4 py-3 border-b">Remote</div>

                        <div className="px-4 py-3 font-semibold border-b">Salary:</div>
                        <div className="px-4 py-3 border-b">60-75,000 onwards</div>
                        <div className="px-4 py-3 font-semibold border-b">Location:</div>
                        <div className="px-4 py-3 border-b">Ghaziyabad, Uttarpradesh</div>

                    </div>
                    <button className=' w-full flex bg-[#ffffff] py-4 px-4  rounded-4xl items-center justify-center mt-10'><span className='text-[#222222]'>Apply Now</span><span><MdNorthEast size={10} className='text-[#222222]' /></span> </button>
                </div>

            </div>
            <div className='flex flex-col items-center justify-center px-4 md:px-10 py- text-center md:text-start text-white'>
                <button className='flex gap-2 items-center text-[18px] px-5   py-4 font-semi-bold rounded-xl bg-gray-700 '><span><BsBag size={12} className='text-[#E1BBFB]' /></span><span >Jobs</span></button>
                <h1 className=' text-white text-2xl  mt-2 md:text-5xl font-bold'>OTHER JOB OPPORTUNITIES</h1>
                <h1 className='text-[#6D6D6D] pt-4 '>Explore an exciting opportunity to drive impactful marketing campaigns, optimize strategies, and grow with the AdVibe team.</h1>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 py-8  md:px-20  mt-10   ">

                {products.map((product, index) => (
                    <div
                        key={index}
                        className="h-auto  rounded-3xl  bg-gradient-to-r from-[#060B21] to-[#0E142F] border-2 inset-shadow-sm inset-shadow-fuchsia-300... border-[#E1BBFB] shadow-2xl p-4 trans-tion-transform duration-200  hover:scale-105 "
                        style={{ boxShadow: "inset 0 0 6px #E1BBFB" }}  >

                        <div className='w-[100px] rounded-3xl bg-[#e1bbfb]
                         border-1  flex justify-center items-center my-5'>
                            <button className='px-2 py-2'>{product.Button}</button>
                        </div>
                        <h2 className="text-[20px] font-semibold text-white  mb-4">{product.name}</h2>
                        <div className='flex  text-white gap-7 mb-2'>
                            {
                                product.location.map((item, index) => (
                                    <span className='' key={index}>{item}</span>
                                ))
                            }
                        </div>

                        <p className="text-[18px] text-white mb-4 ">{product.description}</p>
                    </div>
                ))}
            </div>
            <CoreTeam />
            
        </div>

    )
}

export default CareerPage;