import React from 'react'
import Image from 'next/image'
import { NavLink } from './NavLink';
import Link from 'next/link';
import Script from 'next/script';


export const Pages = [
    {
        link: "/om-oss",
        text: "Om Oss"
    },
    {
        link: "/event",
        text: "Event"
    },
    {
        link: "/bedrift",
        text: "For Bedrifter"
    },
]

export const Navbar: React.FC = () => {

    const SIZE = 100;

    return (

        <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 ">
            <div className="container flex flex-wrap items-end justify-between mx-auto">

                <div className="flex md:order-2 items-end">
                    <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:text-lg">Bli Medlem!</button>
                </div>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-40 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        {Pages.map( (page, index) =>(<NavLink key={index}  link={page.link} text={page.text} />))}
                    </ul>
                </div>
            </div>

             {/** Dropdown menu script from flowbite */}
            <Script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"></Script>
        </nav>

    )
}
