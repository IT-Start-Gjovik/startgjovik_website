'use client';

import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import DropDownMenu from './dropDownMenu';

export const scrollIntoTheView = (id: string) => {
    let element = document.getElementById(id) as HTMLElement;
    if (!element) return;

    element.scrollIntoView({
        behavior: 'smooth',
    });
};

export default function Navbar() {
    const pathname = usePathname();

    const homePageMenuItems = [
        { name: 'Hjem', path: '/' },
        { name: 'Bærekraft', path: '/baerekraft' },
        { name: 'For Bedrifter', path: '/for-bedrifter' },
        { name: 'Personvern', path: '/personvern' },
    ];

    const eventsMenuItems = [
        { name: 'Kommende', path: '/#allEvents' },
        { name: 'Tidligere', path: '/alle-arrangementer' },
    ];

    const burgerMenyItems = [
        { name: 'Hjem', path: '/' },
        { name: 'Bærekraft', path: '/baerekraft' },
        { name: 'For Bedrifter', path: '/for-bedrifter' },
        { name: 'Personvern', path: '/personvern' },
        { name: 'Kommende arrangementer', path: '/#allEvents' },
        { name: 'Tidligere arrangementer', path: '/alle-arrangementer' },
    ];

    const defualtMenuIcon = (
        <ChevronDownIcon
            className='-mr-1 h-5 w-5 text-gray-400'
            aria-hidden='true'
        />
    );

    const burgerMenuIcon = (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='50'
            height='50'
            viewBox='0 0 24 24'
            fill='currentColor'>
            <path d='M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z'></path>
        </svg>
    );

    const fadeInAnimation: Variants = {
        initial: {
            opacity: 0,
            y: -20,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            },
        }),
    };

    useEffect(() => {
        // Scroll to the element with ID "allEvents"
        if (window.location.hash === '#allEvents') {
            scrollIntoTheView('allEvents');
        }
    }, []);

    return (
        <nav className='bg-transparent flex justify-between mx-auto items-center max-w-[877px] min-w-[150px] p-5'>
            <Link href={'/'}>
                <Image
                    src='/images/startLogo.png'
                    alt='logo'
                    width={130}
                    height={130}
                />
            </Link>
            <div>
                <DropDownMenu
                    menuItems={burgerMenyItems}
                    title=''
                    menuIcon={burgerMenuIcon}
                    textSize='text-xl'
                />
            </div>
        </nav>
    );
}
