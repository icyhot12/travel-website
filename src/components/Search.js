import React from 'react'

import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

function Search() {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className='py-4'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas animi commodi doloribus sequi incidunt mollitia! Neque aliquid voluptatum totam minus modi, consequatur blanditiis laboriosam architecto accusamus nihil vero deleniti, a tempore molestiae. Repudiandae cum doloribus exercitationem placeat sed. Eius, iste illum voluptatibus nostrum labore facilis nam blanditiis hic obcaecati animi, quibusdam exercitationem adipisci quidem consequatur provident vel fugiat autem natus voluptate, facere assumenda ipsa neque corrupti? Unde, fugiat ea a quod animi molestias, nihil dolorum cumque reiciendis rem, deleniti nam qui dolores. Labore dolore molestiae voluptate cupiditate unde atque, dolorem temporibus delectus sint aspernatur omnis mollitia officia hic non placeat.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><RiCustomerService2Fill size={50} /></button>
                        <div>
                            <h3 className='py-2'>LEADING SERVICE</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='border text-center'>
                    <p className='pt-2'>GET AND ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                            <option>Grand Antigua</option>
                            <option>Key West</option>
                            <option>Maldives</option>
                            <option>Cozumel</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-in</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <div className='flex flex-col my-2'>
                        <label>Check-out</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <button className='my-4 w-full'>Rates & Availbilities</button>
                </form>
            </div>
        </div>
    )
}

export default Search