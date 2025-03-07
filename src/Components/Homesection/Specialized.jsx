import React from 'react';
import service from '../../assets/service.jpg';
import { Link } from 'react-router-dom';
const Service = () => {

    return (
        <>
            <div className='w-full flex flex-col gap-12 md:py-16 bg-black px-3 sm:px-10 lg:px-20 py-6' >
                {/* Header Section */}
                <div className='w-full mt-6 flex flex-col md:flex-row justify-between gap-6 md:px-5'>
                    <div className=' md:w-1/2 w-full'>
                        <h1 className='w-full text-2xl md:text-[55px] sm:text-3xl  font-bold text-white'>
                            Specialized <span className='text-[#e1bbfb] '>services to</span> <br />
                            <span className='text-[#e1bbfb]'>bring </span> your brand to life.
                        </h1>
                    </div>
                    <div className='md:w-1/2 w-full flex md:justify-end'>
                        <div className='  md:w-[60%] w-full flex flex-col'>
                            <h1 className='text-white text-[24px] font-bold'>About us</h1>
                            <p className='text-gray-400 text-sm sm:text-base  md:text-[14px] mt-2 px-1'>
                                We believe in the power of design to elevate brands and create meaningful connections.
                                Our studio specializes in creating distinctive, impactful visuals that capture the essence of each client’s vision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className='w-full flex flex-col md:flex-row justify-center items-center gap-6  '>
                    <div className='w-full h-auto  md:h-[455px] rounded-3xl mb-6  relative '>
                        <img src={service} className='w-full h-full ' alt="Service" />
                        <div className='absolute top-0 left-10  pt-8    w-1/2 h-full flex flex-col gap-4  '>
                            <h1 className='md:text-[25px]   text-[16px] text-white '>720+ project launched</h1>
                            <p className='text-white md:text-[18px]  text-[12px] '>With over 720 successful projects, we bring experience, creativity, and reliability to every new endeavor.</p>

                            <Link to="/Carieer"><button className=" px-3 py-2 font-semibold text-black bg-gradient-to-r from-purple-300 to-white rounded-lg shadow-lg border border-blue-400 hover:from-purple-400 hover:to-white transition-all">
                                Get Started Now
                            </button>
                            </Link>
                        </div>
                           </div>

                    <div className='w-full flex gap-6 md:px-5 px-0'>
                        <div className='w-full md:h-[450px] h-auto flex flex-col justify-between gap-6 items-center'>
                            {/* Card 1 */}
                            <div className="card w-full p-4 md:h-1/3  bg-gradient-to-r from-[#060B21] to-[#0E142F] flex flex-col md:flex-row items-center gap-6 md:gap-12 rounded-3xl">
                                <h1 className="text-white text-lg sm:text-xl md:text-2xl font-bold md:w-1/3 w-full text-center md:text-left">
                                    Clients Worldwide
                                </h1>
                                <p className="text-white text-sm sm:text-base w-full md:w-2/3 text-center md:text-left">
                                    Our diverse client base spans across industries and continents, united by a shared vision for exceptional design.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className=' card w-full p-4 md:h-1/3   bg-gradient-to-r from-[#060B21] to-[#0E142F] flex flex-col md:flex-row items-center gap-6 md:gap-12 rounded-3xl '
                                >
                                <h1 className='text-white text-lg sm:text-xl md:text-2xl font-bold md:w-1/3 w-full text-center md:text-left'>Years of Experience</h1>
                                <p className='text-white text-sm sm:text-base w-full md:w-2/3 text-center md:text-left'>
                                    Recognized for our commitment to excellence, our work has earned accolades for originality and quality.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className=' card w-full p-4 md:h-1/3  bg-gradient-to-r from-[#060B21] to-[#0E142F] flex flex-col md:flex-row items-center gap-6 md:gap-12 rounded-3xl '
                               >
                                <h1 className='text-white text-lg sm:text-xl md:text-2xl font-bold md:w-1/3 w-full text-center md:text-left'>Winning Creativity</h1>
                                <p className='text-white text-sm sm:text-base w-full md:w-2/3 text-center md:text-left'>
                                    With over a decade of design expertise, we blend innovation with insight to deliver impactful visuals that stand the test of time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;
