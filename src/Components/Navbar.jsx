import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/truwixLogo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-[90%] relative mx-auto flex flex-col bg-gradient-to-b from-[#0e0811] to-[#1e213d] rounded-2xl">
        <div className="w-full h-auto flex justify-between items-center p-4 rounded-2xl xl:px-8 relative z-50">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Truwix Logo" className="w-36" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex w-auto h-auto gap-6 md:gap-8 text-white xl:text-lg">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/Termcondition"><span>Solutions</span></Link>
            <Link to="/business" > <span>Case Studies</span> </Link>
            <Link to="/career">Career</Link>
          </div>

          {/* Contact Button (Desktop) */}
          <Link to="/contact1" className="hidden lg:block">
            <button className="px-5 py-1.5 bg-[#010916] cursor-pointer border font-semibold border-[#E1BBFB] rounded-3xl text-white xl:px-8 xl:text-lg">
              Contact Us
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0e0811] flex flex-col items-center md:gap-6  gap-10 py-6 text-white transition-all">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link>
            <Link to="/business" onClick={() => setIsOpen(false)}>Case Studies</Link>
            <Link to="/career" onClick={() => setIsOpen(false)}>Career</Link>
            <Link to="/contact1" onClick={() => setIsOpen(false)}>
              <button className="px-5 py-2 bg-[#E1BBFB] text-black rounded-3xl">
                Contact Us
              </button>
            </Link>
          </div>
        )}

        {/* Bottom Gradient */}
        <div className="h-5 bg-gradient-to-r from-[#124fff] via-[#fdfefe] to-[#2e85ff] rounded-b-full absolute w-full -bottom-1 -z-10"></div>
      </div>
    </>
  );
};

export default Navbar;
