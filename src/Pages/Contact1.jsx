import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import Footer from '../Components/Footer';

const Contact1 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName.trim()) tempErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) tempErrors.lastName = 'Last Name is required';
        if (!formData.email.trim()) tempErrors.email = 'Email is required';
        if (!/^[0-9]{10}$/.test(formData.phone)) tempErrors.phone = 'Enter a valid 10-digit phone number';
        if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
        if (!formData.message.trim()) tempErrors.message = 'Message is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Data:', formData);
            alert('Form Submitted Successfully!');
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const Icon = [
        { Icon: FaTwitter, url: "https://x.com/truwix97623" },
        { Icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61570529986188" },
        { Icon: FaLinkedin, url: "https://www.linkedin.com/company/truwix/about/?viewAsMember=true" },
        { Icon: FaInstagram, url: "https://teams.microsoft.com/l/message/19:a675ca96-52c8-4f44-b663-94bfce79fb57_ac0d30f4-9dc5-4e5b-b349-a7b100d2a6f0@unq.gbl.spaces/1739536328003?context=%7B%22contextType%22%3A%22chat%22%7D" }
    ];
    return (
        <>
            <div className="w-full min-h-screen bg-black md:pb-20 pb-10">
                <div className="pt-6 relative z-50">
                    <Navbar />
                </div>
                <h1 className='text-white text-2xl md:text-[72px]  text-center mt-6 font-bold'>
                    <span className='text-[#b97fdf]'>We're</span> Here to Help!
                </h1>
                <p className='text-white text-center px-4 md:px-32 text-lg md:text-2xl mt-4'>
                    Feel free to reach out to us for any inquiries or support. We look forward to connecting with you!
                </p>
                <div className='w-full flex flex-col lg:flex-row px-6 md:px-20 mt-10 gap-10'>
                    {/* Contact Info Section */}
                    <div className='w-full md:w-1/2'>
                        <button className="w-[140px] h-[40px] bg-gray-500 text-[#E1BBFB] rounded-full flex items-center justify-center gap-2">
                            <MdOutlinePermContactCalendar />
                            Contact us
                        </button>
                        <h1 className='text-white text-2xl md:text-4xl lg:text-[62px] font-bold mt-4'>
                            Have <span className='text-[#b97fdf]'>Questions?</span> We're Here to Help!
                        </h1>
                        <div className='mt-6 text-white space-y-4 text-lg'>
                            <div>
                                <span className='font-semibold'>Message Us</span>
                                <p>info@truwix.com</p>
                            </div>
                            <div>
                                <span className='font-semibold'>Call Us</span>
                                <p>+91 82874 04804</p>
                                <p>+91 95609 73844</p>
                            </div>
                            <div>
                                <span className='font-semibold'>Location</span>
                                <p>49/26, Sahibabad Industrial Area Site 4, Sahibabad, Ghaziabad, Uttar Pradesh 201010</p>
                            </div>

                            <div>
                                <span className='font-semibold'>Follow Us!</span>
                                <div className='flex gap-3 mt-3'>
                                    {Icon.map(({ Icon, url }, idx) => (       
                                        <a
                                            key={idx}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className='w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center'
                                        >
                                            <Icon size={20} className='text-white' />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='w-full md:w-[550px] bg-gradient-to-r from-[#060B21] to-[#0E142F] rounded-2xl border border-[#e1bbfb] p-3 md:p-6 place-content-center'>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label className="text-white text-sm">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter your first name"
                                        className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none'
                                    />
                                    {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                                </div>

                                <div>
                                    <label className="text-white text-sm">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter your last name"
                                        className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none'
                                    />
                                    {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <label className="text-white text-sm">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none'
                                    />
                                    {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="text-white text-sm">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none'
                                    />
                                    {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none'
                                />
                                {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                            </div>

                            <div>
                                <label className="text-white text-sm">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className='w-full bg-transparent border border-gray-500 rounded-lg p-3 text-white outline-none resize-none'
                                    rows="4"
                                />
                                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                            </div>

                            <button type="submit" className="w-full bg-white text-black text-lg rounded-lg py-2.5 flex items-center justify-center gap-2">
                                Contact us <GoArrowUpRight size={25} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Contact1;
