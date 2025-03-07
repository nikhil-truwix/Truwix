import React from 'react'

function Section3() {
    return (
        <div className="w-full px-6 md:px-10  ">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row w-full gap-6 pb-10">
                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col  md:px-20">

                    <h1 className="text-white font-bold text-3xl md:text-[55px]  md:py-6 py-3">
                        Become a Business Advisor <span className='text-[#E1BBFB]'>to bring </span> your Company to life.
                    </h1>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-1/2 flex justify-center md:items-center  md:px-12">
                    <p className="text-gray-600 text-lg md:text-[20px]  text-center md:text-left md:w-[80%]">
                        We believe in the power of design to elevate brands and  connections. Our studio specializes in creating distinctive, impactful visuals that capture the essence of each client’s.
                    </p>
                </div>
            </div>



            <div className="flex gap-4 flex-col md:flex-row pb-8">
                {/* Sign In Button */}
                <div className="w-full md:w-1/2 flex flex-col  md:px-20">
                    <button className=" text-white px-6 py-2 rounded-md relative to bg-gradient-to-b from-[#141b38] to-[#060b21]">
                        <span className="absolute   rounded-3xl"></span>
                        Sign In as Business Advisor
                    </button>
                </div>


                {/* Sign Up Button */}
                <div className="w-full md:w-1/2 flex flex-col py-4 md:px-20"> <button className="bg-gradient-to-b from-[#141b38] to-[#060b21] text-white px-6 py-2 rounded-md">
                    Sign Up as Business Advisor
                </button></div>

            </div>
             </div>
    )
}

export default Section3