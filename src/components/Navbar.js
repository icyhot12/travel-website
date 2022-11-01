import React from "react";

import {BsPerson} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"

function Navbar() {
    return (
        <div className='flex justify-between items-center h-20'>
            <div>
                <h1>BEACHES</h1>
            </div>
            <ul className='flex flex-row gap-3'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div>
                <BiSearch />
                <BsPerson />
            </div>
        </div>
    )
}

export default Navbar 