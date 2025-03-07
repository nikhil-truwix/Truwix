import NavBar from "../Components/Navbar.jsx";
import hero from "../assets/hero.jpg";
import Services from "../Components/Homesection/Services.jsx";
import Specialized from '../Components/Homesection/Specialized.jsx';
import Transform from "../Components/Homesection/Transfrom.jsx";
import Discover from "../Components/Homesection/Discover.jsx";
import Boxsection from "../Components/Homesection/Boxsection.jsx";
import Footer from "../Components/Footer.jsx";
import icon1 from '../assets/Logomark1.png'
import icon2 from '../assets/Logomark.png'
import icon3 from '../assets/Logomark3.png'
import icon4 from '../assets/Logomark4.png'
import icon5 from '../assets/Logomark4.png'
import icon6 from '../assets/Logomark4.png'
import text1 from '../assets/Logotext1.png'
import text2 from '../assets/Logotext.png'
import text3 from '../assets/Logotext3.png'
import text4 from '../assets/Logotext4.png'
import text5 from '../assets/Logotext5.png'
import text6 from '../assets/Logotext6.png'
import { Link } from "react-router-dom";
import { useEffect } from 'react';
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="w-full md:h-[1050px]  h-screen relative"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ><div className="pt-6 relative z-50">
          <NavBar />
        </div>

        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-center flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#E1BBFB]">
            Where Creativity
            <br />
            Meets Purpose
          </h1>{" "}
          <p className="text-white text-sm">
            Creative design to build a brand <br />
            that’s strong, impactful, and full of meaning.
          </p>
          <div className="flex gap-10">
            <Link to="/career" > <button className="w-[150px] md:w-[200px] py-3 bg-white text-black rounded-xl cursor-pointer">See Our Work</button></Link>
            <Link to="/notfound"><button className="w-[150px] md:w-[200px] py-3 bg-black text-white rounded-xl cursor-pointer">Get A Quote</button></Link>
          </div>
        </div>

        <div className="absolute bottom-2 w-full  px-20  hidden  md:block ">
          <div className="h-1 bg-gradient-to-r from-[#124fff] [#5de4ff] via-[#fdfefe] to-[#2e85ff]  w-full "></div>
          <div className="flex flex-col  bg-gradient-to-t from-[#111824]  to-[#12121200]">
            <span className="text-[16px]  flex justify-center items-cente text-white mt-3 pb-4"> Join 4,000+ companies already growing</span>

            <div className=" w-full  flex pb-3">
              <div className=" w-full flex  gap-3 justify-between items-center px-8">
                <span className="text-white flex items-center gap-1"> <img src={icon1} /> <img src={text1} /></span>
                <span className="text-white flex items-center gap-1"> <img src={icon2} /> <img src={text2} /></span>
                <span className="text-white flex items-center gap-1"> <img src={icon3} /> <img src={text3} /></span>
                <span className="text-white flex items-center gap-1"> <img src={icon4} /> <img src={text4} /></span>
                <span className="text-white flex items-center gap-1"> <img src={icon5} /> <img src={text5} /></span>
                <span className="text-white flex items-center gap-1"> <img src={icon6} /> <img src={text6} /></span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Specialized />
        <Services />
        <Boxsection />
        <Transform />
        <Discover />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
