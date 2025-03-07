import React from 'react'

import back from '../../assets/transform.jpg';
import { motion } from "framer-motion";
import { UpwardsCarousel } from '../../Utils/UpwardsCarousel.jsx';

const texts = [
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
  "Mobile App Design",
  "Visual Identity",
  "Graphic Design",
  "UI/UX Design",
  "Web Development",
];
const Transform = () => {

  // const [currentIndex, setCurrentIndex] = useState(2); // Centered index

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === texts.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 2000); // Change text every 2 seconds
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <>
      <div className='w-full h-auto md:py-7 bg-[#010916] px-3  '
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className='flex sm:gap-4  md:flex-row justify-between md:px-12  px-2  flex-col '>
          <div className='md:w-1/2 w-full font-bold'><h1 className='text-bold text-white  text-2xl md:text-[55px] font-bold pb-6 md:pb-0'> Transforming Concepts into <span className='text-[#E1BBFB] '>Powerful Visuals</span></h1></div>
          <div className='md:w-1/2 w-full flex justify-end  '>
            <div className='md:w-[60%] flex flex-col justify-between items-start  '>
              <span className='text-white md:text-[14px] leading-6'>At Iconique, we offer a range of design services tailored to bring your brand to life. From identity and digital design to print and packaging, our expertise ensures</span></div>

          </div>

        </div>
        <div className="w-full min-h-auto py-20 flex items-center justify-center overflow-hidden">
          <div className="relative h-auto w-full flex flex-col items-center justify-center">
            {/* {texts.map((text, index) => {
              const isCenter = index === currentIndex;
              const opacity = isCenter ? "opacity-100" : "opacity-40";
              const scale = isCenter ? "scale-110" : "scale-90";
              const yPosition = (index - currentIndex) * 50; // Moves text up or down

              return (
                <motion.h1
                  key={index}
                  className={`absolute text-white font-bold md:text-4xl text-2xl ${opacity} ${scale}`}
                  animate={{ y: yPosition }}
                  initial={{ y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {text}
                </motion.h1>
              );
            })} */}
            <UpwardsCarousel items={texts} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Transform;