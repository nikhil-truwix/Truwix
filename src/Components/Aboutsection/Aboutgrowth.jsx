import React from 'react';
import Icon from '../../assets/Icon.png';
import Icon2 from '../../assets/Vector2.png';
import Icon3 from '../../assets/Vector5.png';

function Aboutgrowth() {
    return (
        <div className='w-full bg-black text-white py-10 px-4 md:px-16'>

            {/* Section Title */}
            <div className='flex flex-col md:flex-row w-full gap-10 md:pb-10 pb-6'>
                <div className='w-full md:w-1/2 flex flex-col md:px-10 '>
                    <button className="w-[160px] h-[36px] bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center gap-2">
                        <img src={Icon} alt="Vision & Mission Icon" className='w-5 h-5' />
                        Vision & Mission
                    </button>
                    <h1 className='text-2xl  md:text-5xl font-bold md:py-3 py-2 leading-tight'>
                        Empowering Growth with <span className='text-[#b97fdf]'>Innovation</span>
                    </h1>
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-center px-2 md:px-10'>
                    <p className='text-gray-400 text-[15px] md:text-[20px]'>
                        We empower brands to achieve remarkable growth through innovative and data-driven digital strategies, delivering measurable results and long-term success.
                    </p>
                </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className='flex flex-col md:flex-row gap-10'>

                {/* Vision Card */}
                <div className='w-full md:w-1/2'>
                    <div className=' w-full  bg-gradient-to-r from-[#0E142F] to-[#060B21] rounded-3xl p-3 md:p-10 py-5 '>
                        <h1 className='text-3xl md:text-5xl font-bold pb-4'>Our VISION</h1>
                        <div className='flex gap-6 items-center justify-between '>
                            <p className='text-[16px] md:text-[20px]  md:w-[78%] w-full'>
                                To be the leading digital marketing agency that empowers brands to achieve unprecedented visibility and growth through innovative and data-driven strategies.
                            </p>
                            <img src={Icon2} alt="Vision Icon" className='h-12 w-12 ' />
                        </div>
                    </div>
                </div>

                {/* Mission Card */}
                <div className='w-full md:w-1/2'>
                    <div className='bg-gradient-to-r from-[#0E142F] to-[#060B21] rounded-3xl p-3 md:p-10 py-5'>
                        <h1 className='text-4xl md:text-5xl font-bold pb-4'>Our MISSION</h1>
                        <div className='flex gap-6 items-center'>
                            <p className='text-[16px] md:text-[20px] w-[78%]'>
                                Our mission is to deliver exceptional digital marketing solutions that drive measurable results, enhance brand presence, and foster long-term success for our clients.
                            </p>
                            <img src={Icon3} alt="Mission Icon" className='h-12 w-12  ' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Aboutgrowth;
