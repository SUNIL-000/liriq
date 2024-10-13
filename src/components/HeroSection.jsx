import React from 'react'

const HeroSection = () => {
    return (
        <div className='text-center py-7 px-10 md:px-20  w-[100vw] gap-5 z-10'>
            <h1 className='text-[40px] md:text-6xl font-bold w-full md:w-[60%] md:mx-auto text-center '>Elevate Your Events at Liriq Venue</h1>
            <p className='text-[16px] md:text-sm w-full md:w-[60%] mx-auto mt-4 text-pretty'>Discover the perfect setting for your next event at Liriq, where elegance meets functionality.
                Our premium space is designed to create unforgettable experiences for you and your guests.</p>

            {/* hero button section  */}
            <div className='gap-4 mt-4'>
                <button className='bg-gray-800 text-white px-4 py-2 border-2 border-black hover:bg-black mr-2 font-semibold'>Learn More</button>
                <button className='bg-white text-black px-4 py-2 border-2 border-black font-semibold'>Sign Up</button>
            </div>

            {/* //hero images section  */}
            <div className='w-full '>
                <img className='h-[35rem] w-full mt-3 bg-cover bg-no-repeat bg-current'
                    src="/logo-svg.svg" alt='heroImage' />

            </div>
        </div>
    )
}

export default HeroSection