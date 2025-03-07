import React from 'react'

const Discover = () => {

    const products = [
        {
            name: "UI/UX Overhaul for ABC App",
            type: "Learn more",

        },
        {
            name: "Crafting a Bold Look for DEF Products",
            type: "Learn more",
        },
        {
            name: "Rebranding XYZ Corp for the Digital",
            type: "Learn more",

        },
    ];

    return (
        <div className='bg-[#010916] w-full h-auto pb-12 px-3 md:px-16 lg:px-20 md:py-5 '>
            <div className='flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/2 mt-8'>
                    <h1 className='text-white text-2xl md:text-[50px] font-bold text-center md:text-start'> Discover how we approach each project -<span className='text-[#b69ae3]'> with strategy</span></h1>
                </div>
                <div className='flex flex-col md:w-1/2 md:mt-8 md:items-end'>
                    <div className='flex flex-col'>
                        <h4 className='text-white text-[18px] font-bold text-center md:text-start md:hidden '>Inside Our Creative Process</h4>
                        <h4 className='text-white text-[24px] font-bold text-center md:text-start  hidden md:block '>Inside Our <br />Creative Process</h4>
                        <div className='flex md:justify-start justify-center '>
                            <button className="px-5 h-[50px] text-white cursor-pointer border-2  border-b-gray-500 rounded-full my-2 text-[20px] underline hover:text-[#E1BBFB]"> Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-4 md:mt-10 mt-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className=" md:h-[300px] h-auto  rounded-3xl border bg-[#0d0c31] bg-gradient-to-r py-2 md:py-5 from-[#060B21] to-[#0E142F] p-3 md:p-6 transition-transform duration-200 hover:scale-105"
                    >
                        <div className='w-full h-[150px] bg-white rounded-2xl mb-4'></div>
                        <div className='flex justify-between '>
                            <div className='w-[60%]'>
                                <h6 className=" md:text-[20.61px] font-semibold text-white  pb-6 mb-2">{product.name}</h6>
                            </div>
                            <div className='w-[40%] flex justify-end items-center' >
                                <span
                                    className="text-[20.67px] text-[#b76de8] underline"
                                    style={{
                                        textShadow: "0 0 10px #E1BBFB, 0 0 20px #E1BBFB, 0 0 30px #E1BBFB",
                                    }} // Purple shadow
                                >
                                    {product.type}
                                </span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Discover
