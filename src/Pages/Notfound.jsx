import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='w-full h-auto bg-[#010916] flex flex-col'>
            <div className="pt-6 relative z-50">
                <Navbar />
            </div>
            <div className='flex  flex-col items-center justify-center text-center py-40'>
                <h1 className='text-[136px] text-[#a5aefb] font-bold font-saira'>404</h1>
                <h2 className='text-white md:text-[50px] text-[50px] font-bold'>Page Not Found!</h2>
                <button
                    className='text-white text-[18.5px] px-6 py-3 mt-4 rounded-3xl border-2 border-[#5DA1FF] hover:bg-[#5DA1FF] transition duration-300'
                    onClick={() => navigate('/')}
                >
                    Back to Home
                </button>
            </div>


            <Footer />


        </div>

    );
}

export default NotFound;
