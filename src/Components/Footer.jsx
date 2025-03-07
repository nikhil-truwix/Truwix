import React from 'react';
import Logo from '../assets/truwixLogo.svg';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#062046] to-[#010916] pt-5 text-gray-300 relative">
      <div className=" px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between">
        {/* Logo & Description */}
        <div className="w-full md:w-[40%]flex flex-col items-center md:items-start text-center md:text-left">
          <img src={Logo} className="w-[100px]" alt="Truwix Logo" />
          <p className="mt-2 md:w-[50%] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4 mt-4">
          <Link to="https://www.facebook.com/profile.php?id=61570529986188" >  <span className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
              <FaFacebookF className="text-[#0a1c41] text-lg" />
            </span></Link>
          
           <Link to="https://x.com/truwix97623" > <span className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
              <FaTwitter className="text-[#0a1c41] text-lg" />
            </span>  </Link>
           <Link to="https://www.linkedin.com/company/truwix/about/?viewAsMember=true">
            <span className="h-10 w-10 bg-white rounded-full flex justify-center items-center">
              <FaLinkedinIn className="text-[#0a1c41] text-lg" />
            </span>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-6 mt-6 md:mt-0 ">
          <div>
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/career" className="hover:text-blue-400">Plans & Pricing</Link></li>
              <li><Link to="/career" className="hover:text-blue-400">Career</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Support</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/NotFound" className="hover:text-blue-400">Blog</Link></li>
              <li><a href="/contact1" className="hover:text-blue-400">Contact Us</a></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Online Chat</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">WhatsApp</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Telegram</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Resources</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/Termcondition" className="hover:text-blue-400">Help Center</Link></li>
              <li><Link to="/Termcondition" className="hover:text-blue-400">How it Works</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Business</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Page</Link></li>
              <li><Link to="/NotFound" className="hover:text-blue-400">Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold">Company</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact1" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/career" className="hover:text-blue-400">Career Tips</Link></li>
              <li><Link to="/career" className="hover:text-blue-400">Career</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 pb-5">
        <p className="text-[14px]">© 2024, TruWixTech Solutions Pvt. Ltd</p>
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2 md:mt-0">
          <Link to="#" className="hover:text-blue-400 text-[14px]">Terms of Service</Link>
          <Link to="#" className="hover:text-blue-400 text-[14px]">Privacy Policy</Link>
          <Link to="#" className="hover:text-blue-400 text-[14px]">Legal Notice</Link>
          <Link to="#" className="hover:text-blue-400 text-[14px]">Cookie Settings</Link>
        </div>
      </div>

      {/* Decorative Gradient Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-[#124fff] via-[#fdfefe] to-[#2e85ff]"></div>
    </footer>
  );
};

export default Footer;
