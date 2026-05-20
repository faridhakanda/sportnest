import { Separator } from '@heroui/react';
import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFacebook, FaX } from 'react-icons/fa6';

const Footer = () => {
    const year = new Date();
    const currentYear = year.getFullYear();
    return (
        <div className='bg-[#1B3C53] w-full'>
            <div className='grid grid-cols-1 md:grid-cols-3 w-3/4 mx-auto justify-center my-6 text-[#FFFFFF]'>
                <div className='mx-auto w-full text-center my-2 space-y-2  cols-span-4'>
                    <h2 className=' font-bold italic text-4xl bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'><span className='text-yellow-700'>S</span>port<span className='text-pink-700'>N</span>est</h2>
                    <p className='text-justify text-[#647489]'>SportNest is one of the leading online esport platform. There is available all of the online sport streaming video. If you are interest to publish and watch you favorite sport. You can join now, for you slot.</p>
                </div>
                <div className='mx-auto  w-full text-center my-2 space-y-2'>
                    <h2 className='text-2xl font-bold text-[#ce2323]'>Contact Us</h2>
                    <div className='text-[#647489]'>
                        <p>Email: sportnest@info.com</p>
                        <p>Phone: +880123456789</p>
                        <p>Address: 3/4 Gulkibari, Mymensingh</p>
                    </div>
                    
                </div>
                <div className='mx-auto text-center  w-full'>
                    <h2 className='text-2xl font-bold text-[#ce2323]'>Social Media</h2>
                    <div className='flex space-x-3 my-2 items-center mx-auto justify-center'>
                        
                        <FaLinkedin />
                        <FaFacebook />
                        <FaGithub />
                        <FaX />
                        <FaInstagram />
                        
                    </div>
                    
                </div>
                

            </div>
            <div className='mx-auto text-center mb-4'>
                <Separator className='w-3/4 mx-auto my-4 bg-gray-500'/>
                <h2 className='text-[#647489] my-8'>&copy; All Right Reserved - {currentYear} by SportNest.</h2>
            </div>
        </div>
        
    );
};

export default Footer;