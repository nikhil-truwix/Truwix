import React from 'react';

const AboutLast = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-[#010916] md:py-16 py-6 px-2 md:px-20'>

      {/* Button Section */}
      <div className='w-full flex justify-center mb-6'>
        <button className="bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center px-6 py-2 text-sm md:text-base font-medium">
          GROW YOUR BUSINESS TODAY
          <span className="ml-2">🚀</span>
        </button>
      </div>

      {/* Heading */}
      <h2 className='w-full text-white text-3xl md:text-[62px] font-bold text-center leading-snug'>
        Ready to <span className="text-[#e1bbfb]">Elevate</span> Your <br className='hidden md:block' /> Digital Presence?
      </h2>

      {/* Subtext */}
      <p className='text-white text-base md:text-lg text-center mt-4 max-w-2xl py-5'>
        Take the next step in your digital journey! Whether you're ready to dive in or just exploring, our team is here to guide you.
      </p>

    </div>
  );
}

export default AboutLast;
