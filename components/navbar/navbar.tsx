'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DropDownMenu from './dropDownMenu';

export default function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4) !important';
    };

    return (
        <nav className='bg-transparent absolute top-0 left-0 right-0 flex justify-between mx-auto items-center gap-5 max-w-[1132px] p-5 md:p-10 w-full z-[999]'>
            {/* Start Logo START */}
            <Link href={'/'} onClick={sidebar ? showSidebar : undefined}>
                <Image
                    className='min-w-[120px]'
                    src='/images/startLogo.png'
                    alt='logo'
                    width={140}
                    height={140}
                />
            </Link>
            {/* Start Logo END */}

            {/* Hamburger icon START */}
            <Link href='#' onClick={showSidebar}>
                <svg
                    width='35'
                    height='35'
                    viewBox='0 0 50 46'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M0 3.7002H50' stroke='#F5F5F5' strokeWidth='7' />
                    <path d='M0 21.25H50' stroke='#F5F5F5' strokeWidth='7' />
                    <path d='M0 39.7002H50' stroke='#F5F5F5' strokeWidth='7' />
                </svg>
            </Link>
            {/* Hamburger icon END */}

            <DropDownMenu sidebar={sidebar} showSidebar={showSidebar} />
        </nav>
    );
}
