import React from 'react'
import Image from 'next/image'
import { Pages } from 'constants/pagesConst'
import { NavLink } from './NavLink'



export const Hero: React.FC = () => {
    return (

        <div className='relative'>
            <div className='absolute z-5 min-w-full min-h-full'>
                <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 ">
                    <div className="container flex flex-wrap items-end justify-between mx-auto">

                        <div className="flex md:order-2 items-end">
                            <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:text-lg">Bli Medlem!</button>
                        </div>


                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                            <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-40 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                                {Pages.map((page, index) => (<NavLink key={index} link={page.link} text={page.text} />))}
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>

            <video className='absolute min-w-full min-h-full right-0 left-0 z-[-1]' autoPlay muted loop>
                <source src='./bg.mp4' type='video/mp4' />
            </video>
            <Image className='absolute z-2 mt-[50px]  sm:mt-[250px] right-0 left-0 mx-auto' src="/logo.png" width={1300} height={50} alt="Start Gjøvik" />
        </div>



    )
}
