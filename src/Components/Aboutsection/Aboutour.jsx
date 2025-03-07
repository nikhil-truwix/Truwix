import React from 'react';
import CountUp from 'react-countup';
import Icon from '../../assets/Vector1.png';

function Aboutour() {
    const data = [
        { num: 1500, s: "+", title: "Projects Completed" },
        { num: 95, s: "%", title: "Client Retention Rate" },
        { num: 1200, s: "+", title: "Leads Generated Monthly" },
        { num: 300, s: "%", title: "Average Increase in ROI" },
    ];

    return (
        <div className='flex flex-col  md:px-20 px-2 py-10 md:py-24'>

            {/* Top Section */}
            <div className='flex flex-col lg:flex-row w-full gap-10 md:gap-40'>

                {/* Left Content */}
                <div className='w-full lg:w-1/2 flex flex-col'>
                    <button className="w-fit bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center px-4 py-2 text-sm md:text-base font-medium">
                        <img src={Icon} alt="Why us" className='h-5 w-5 mr-2' />
                        Why us
                    </button>

                    <h1 className='w-full text-white font-bold text-xl md:text-[62px] leading-snug pt-6 text-center md:text-start lg:text-4xl xl:text-5xl 2xl:text-6xl'>
                        ABOUT <span className='text-[#b97fdf]'>OUR</span> REVOLUTIONIZING COMPANY
                    </h1>

                    <p className='text-gray-400 text-base md:text-[24px] text-[15px] mt-4 lg:text-xl xl:text-2xl'>
                        Truwix is a forward-thinking digital agency dedicated to crafting exceptional digital experiences. We specialize in UI/UX design, website development, branding, and digital solutions that help businesses establish a strong online presence. Our team combines creativity with technical expertise to deliver user-centric designs and high-performing digital products tailored to each client's needs.
                    </p>
                </div>

                {/* Right Image Placeholder */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <div className='w-full lg:w-[545px] h-[250px] md:h-[488px] bg-gray-800 rounded-3xl'></div>
                </div>
            </div>

            {/* Stats Section */}
            <div className='w-full flex flex-wrap justify-center gap-10 items-center h-auto py-10 mt-10 rounded-3xl border-2 shadow-2xl border-[#513b73] px-5'
                style={{ boxShadow: "inset 0 0 30px #513b73" }}>
                {data.map((item, index) => (
                    <div key={index} className='text-[#e1bbfb] flex flex-col text-center px-7'>
                        <span className='text-5xl md:text-[80px] font-bold'>
                            <CountUp start={0} end={item.num} duration={2.5} separator="," />
                            <span>{item.s}</span>
                        </span>
                        <span className='text-gray-300 text-lg md:text-xl'>{item.title}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Aboutour;
