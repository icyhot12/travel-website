import React from 'react'

import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <div className='w-full bg-gray-100 p-4 flex flex-col items-center'>
            <div className='justify-between w-full max-w-7xl md:flex md:max-w-6xl'>
                <p className='font-extrabold text-2xl text-center'>BEACHES.</p>
                <div className='flex justify-between gap-10 px-6 my-3'>
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaYoutube className="icon" />
                    <FaPinterest className="icon" />
                    <FaInstagram className="icon" />
                </div>
            </div>
            <div className='w-full max-w-7xl flex justify-between md:max-w-6xl'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='lg:flex'>
                    <li>Home</li>
                    <li>Destinations</li>
                    <li>Travel</li>
                    <li>View</li>
                    <li>Book</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer