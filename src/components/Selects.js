import React from 'react'

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import KeyWest from '../assets/keywest.jpg'

import SelectPhoto from './SelectPhoto'


function Selects() {
    return (
        <div className='max-w-[1240px] px-4 py-16 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            <SelectPhoto img={BoraBora} text="Bora Bora" />
            <SelectPhoto img={BoraBora2} text="Bora Bora" />
            <SelectPhoto img={Maldives} text="Maldives" />
            <SelectPhoto img={Maldives2} text="Maldives" />
            <SelectPhoto img={Maldives3} text="Maldives" />
            <SelectPhoto img={KeyWest} text="Key West" />
        </div>
    )
}

export default Selects