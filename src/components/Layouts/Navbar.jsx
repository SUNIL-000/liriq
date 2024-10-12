import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { dropDownSection } from '../constant/dropdown';
import { FaCube } from "react-icons/fa";
import { navItems } from '../constant/NavItems';
const Navbar = () => {
   
    return (
        <navbar>
            <nav className='flex justify-between items-center font-normal capitalize py-4 border-b px-14 md:px-20'>

                <div className='flex gap-5 items-center justify-center'>
                    <img src="/logo-png.png" className='h-10 w-24 rounded-md' alt="Liriq" />
                    <ul className='hidden md:flex md:flex-row md:gap-4'>
                        {
                            navItems.map((data, index) => {
                                return <li key={index}>{data.name}</li>
                            })
                        }
                    </ul>
                </div>
                <div className='md:hidden'>
                    <p className='cursor-pointer text-2xl'> <GiHamburgerMenu /> </p>

                </div>
                {/* button div  */}
                <div className='hidden md:flex md:justify-around gap-2'>
                    <button type="button" className='border border-gray-950 text-black px-4 py-1 font-medium text-md '>Join</button>
                    <button type="button" className='bg-black px-4 py-1 text-white font-medium text-md  '>View</button>
                </div>

            </nav>


            <div className='grid grid-cols-4 w-full py-5 px-20 border-black border-2'>
                {
                    dropDownSection.map((data, index) => {
                        return <div key={index} className=''>
                            <h2 className='mb-4 font-bold'>{data.title}</h2>
                            {
                                data.sections.map((section, ind) => {
                                    return <span key={ind} className='flex my-6 justify-start gap-2 items-start'>
                                        <span className=' mt-1'><FaCube /></span>
                                        <div>
                                            <h2 className='font-semibold text-md '>{section.title} </h2>
                                            <h3 className='font-normal text-sm'>{section.description}</h3>
                                        </div>
                                    </span>
                                })
                            }
                        </div>
                    })
                }
            </div>
        </navbar>
    )
}

export default Navbar