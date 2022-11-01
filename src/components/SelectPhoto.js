import React from 'react'

function SelectPhoto(props) {

    const { img, text } = props

    return (
        <div className='relative'>
            <img className="w-full h-full object-cover" src={img} alt="/" />
            <div className='absolute top-0 left-0 w-full h-full bg-gray-900/10'>
                <p className='absolute bottom-4 left-4 text-xl font-bold text-white'>{text}</p>
            </div>
        </div>
    )
}

export default SelectPhoto