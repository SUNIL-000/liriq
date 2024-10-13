import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaCube } from 'react-icons/fa';
import { RiArrowDropDownLine, RiArrowDropUpLine, RiArrowDropRightLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { navItems } from '../constant/NavItems'; // Navigation items array

import { dropDownSection } from '../constant/dropdown'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [mobileNav, setMobileNav] = useState(false)
    return (
        <nav>
            {/* Desktop navbar  */}
            <nav className='hidden md:flex z-20 md:flex-row relative justify-between items-start md:items-center font-normal capitalize px-20 py-4 border-b '>
                {/* Logo and Links */}
                <div className='flex flex-col md:flex-row gap-4 items-center justify-center '>
                    <img src="/logo-transparent-svg.svg" className='h-12 bg-cover bg-center' alt="Liriq" />
                    <ul className={`${hamburger ? 'hidden' : 'flex'} md:flex relative flex-col md:flex-row gap-1 md:gap-4`}>
                        {navItems.map((data, index) => (
                            <li key={index} className='mb-4 md:mb-0 text-md font-semibold'>
                            <Link to={data.link}>{data.name}</Link></li>
                        ))}
                        <li
                            onClick={() => setDropdown(!dropdown)}
                            className='text-center inline-flex justify-center items-center cursor-pointer'>
                            more links
                            <span className='text-xl transition-transform'>
                                {dropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                            </span>
                        </li>
                        {/* Dropdown Menu */}
                        <div className={`grid grid-cols-1 bg-white absolute top-[170px] z-20 -left-2 md:top-[50px] w-[90vw] md:w-[100vw]  md:-left-[35%] md:grid-cols-4  py-5 px-4 md:px-20 md:border-black md:border-y-2 transition-transform ${dropdown ? "visible" : "hidden"} ${dropdown && hamburger == false ? "visible" : "hidden"}`}>
                            {
                                dropDownSection.map((data, index) => {
                                    return <div key={index} className='p-4'>
                                        <h2 className='md:mb-4 font-bold'>{data.title}</h2>
                                        {
                                            data.sections.map((section, ind) => {
                                                return <Link to={section.link}
                                                    key={ind}
                                                    onClick={() => setDropdown(!dropdown)}
                                                    className='flex my-3  md:my-3 justify-start gap-2 items-start'>
                                                    <span className=' mt-3'><FaCube /></span>
                                                    <div className='hover:bg-gray-200 bg-transparent rounded-md p-2'>
                                                        <h2 className='font-semibold text-md '>{section.title} </h2>
                                                        <h3 className='font-normal text-sm hidden md:block'>{section.description}</h3>
                                                    </div>
                                                </Link>
                                            })
                                        }
                                    </div>
                                })
                            }
                            <div className='bg-gray-200 p-4 '>
                                <h3 className='capitalize font-bold'>from our blog</h3>
                                <div className='my-3 gap-3'>
                                    <img src="/logo-png.png" className='h-[105px] w-[160px] mb-4' alt="demo_logo" />
                                    <h3 className='capitalize font-bold'>Event Success</h3>
                                    <p className='text-sm font-normal'>Tips for hosting unforgettable events.</p>
                                    <a href={"#"} className='underline'>Read more</a>
                                </div>
                                <button type="button" className='flex justify-center items-center'>Join <span className='text-xl mt-1'><RiArrowDropRightLine /></span> </button>
                            </div>
                        </div>
                    </ul>
                </div>

              
               

                {/* Action Buttons */}
                <div className={` md:flex md:justify-around gap-2`}>
                    <button
                        type="button"
                        className='border border-gray-950 hover:text-gray-700 transition-colors hover:bg-gray-100 text-black px-4 py-1 font-medium text-md'
                    >
                        Join
                    </button>
                    <button
                        type="button"
                        className='bg-black hover:bg-gray-600 transition-all px-4 py-1 text-white font-medium text-md'
                    >
                        View
                    </button>
                </div>
            </nav>


            {/* mobile nav */}

            <nav className='md:hidden  flex flex-col bg-white  items-start md:items-center font-normal capitalize  py-4 border-b '>
                {/* Logo and menu */}
                <div className='flex justify-between w-full px-12'>
                    <div><img src="/logo-svg.svg" height={40} width={40} alt="Liriq" /></div>
                    <p className='text-3xl cursor-pointer'
                        onClick={() => { setMobileNav(!mobileNav) }}
                    >{mobileNav ? <RxCross2 /> : <GiHamburgerMenu />}</p>
                </div>

                <div className={`${mobileNav ? "flex" : "hidden"} max-h-auto h-full bg-white z-50 flex-col mt-2 gap-4 px-12 items-start justify-start  `}>
                    <ul className={`flex-col  gap-1 `}>
                        {navItems.map((data, index) => (
                            <li key={index} className='mb-4 md:mb-0'>
                                <Link to={data.link} 
                                onClick={()=>{setMobileNav(false)}}>{data.name}</Link>
                            </li>
                        ))}
                        <li
                            onClick={() => setDropdown(!dropdown)}
                            className='text-center inline-flex justify-center items-center cursor-pointer'>
                            more links
                            <span className='text-xl transition-transform'>
                                {dropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
                            </span>
                        </li>
                        {/* mobie Dropdown Menu */}
                        <div className={`grid grid-cols-1  w-[90vw]   py-5 px-4  transition-transform ${dropdown ? "visible" : "hidden"} ${dropdown && hamburger == false ? "visible" : "hidden"}`}>
                            {
                                dropDownSection.map((data, index) => {
                                    return <div key={index} className='px-4 '>
                                        <h2 className='mb-2 font-bold'>{data.title}</h2>
                                        {
                                            data.sections.map((section, ind) => {
                                                return <Link to={section.link}
                                                    key={ind}
                                                    onClick={() => { setDropdown(!dropdown), setMobileNav(false) }}
                                                    className='flex w-[100%] my-1 justify-start gap-2 items-start'>
                                                    <span className=' mt-3'><FaCube /></span>
                                                    <div className='hover:bg-gray-200 bg-transparent rounded-md p-2'>
                                                        <h2 className='font-semibold text-md '>{section.title} </h2>
                                                        <h3 className='font-normal text-sm hidden '>{section.description}</h3>
                                                    </div>
                                                </Link>
                                            })
                                        }
                                    </div>
                                })
                            }
                            <div className='bg-gray-200 p-4 '>
                                <h3 className='capitalize font-bold'>from our blog</h3>
                                <div className='my-3 gap-3'>
                                    <img src="/logo-png.png" className='h-[110px] w-[160px] mb-4' alt="demo_logo" />
                                    <h3 className='capitalize font-bold'>Event Success</h3>
                                    <p className='text-sm font-normal'>Tips for hosting unforgettable events.</p>
                                    <a href={"#"} className='underline'>Read more</a>
                                </div>
                                <button type="button" className='flex justify-center items-center'>Join <span className='text-xl mt-1'><RiArrowDropRightLine /></span> </button>
                            </div>
                        </div>

                    </ul>



                            {/* mobile buttons */}
                    <div className={` flex flex-col w-[82vw] gap-4 px-5 text-center`}>
                        <button
                            type="button"
                            className='border w-full border-gray-950 hover:text-gray-700 transition-colors hover:bg-gray-100 text-black px-4 py-1 font-medium text-md'
                        >
                            Join
                        </button>
                        <button
                            type="button"
                            className='bg-black w-full hover:bg-gray-600 transition-all px-4 py-1 text-white font-medium text-md'
                        >
                            View
                        </button>
                    </div>
                   
                </div>


            </nav>
        </nav>
    );
};

export default Navbar;
