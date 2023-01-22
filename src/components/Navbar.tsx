import { Pages } from '@/constants/pagesConst'
import { BlueButton } from '@/UI/BlueButton'
import React from 'react'
import { NavLink } from './NavLink'

export const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent top-0 left-0 right-0 z-10 absolute">
            <div className="container flex flex-wrap items-end justify-between mx-auto">

                <div className="flex md:order-2 items-end">
                    <BlueButton link="/påmelding" text="Bli Medlem!" />
                </div>


                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                    <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-40 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                        {Pages.map((page, index) => (<NavLink key={index} link={page.link} text={page.text} />))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}
