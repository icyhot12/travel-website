import React from 'react'
import { useState } from 'react';

import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

function Carousel() {

    const [slide, setSlide] = useState(0)

    const prevSlide = () => {
        setSlide(prevSlide => {
            if (prevSlide === 0) {
                return sliderData.length - 1
            } else {
                return prevSlide - 1
            }
        })
    }
    const nextSlide = () => {
        setSlide(prevSlide => {
            if (prevSlide === sliderData.length - 1) {
                return 0
            } else {
                return prevSlide + 1
            }
        })
    }

    const sliderData = [
        {
            url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
    ];

    const sliderElements = sliderData.map((item, index) => {
        return (
            index === slide &&
            <img
                key={index}
                className="w-full rounded-xl object-cover"
                src={item.url}
                alt="/"
            />
        )
    })

    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] left-8 text-3xl text-white' />
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] right-8 text-3xl text-white' />
            {sliderElements}
        </div>
    )
}

export default Carousel