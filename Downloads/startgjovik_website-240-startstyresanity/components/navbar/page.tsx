'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDownMenu from './dropDownMenu';
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, Variants } from "framer-motion";
import { useEffect } from 'react';

export const scrollIntoTheView = (id: string) => {
    let element = document.getElementById(id) as HTMLElement;
    if (!element) return;

    element.scrollIntoView({
        behavior: "smooth",
    });
};

export default function Navbar() {
    const pathname = usePathname()

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

    const burgerMenyuItems = [
        { name: 'Hjem', path: '/' },
        { name: 'Bærekraft', path: '/baerekraft' },
        { name: 'For Bedrifter', path: '/for-bedrifter' },
        { name: 'Personvern', path: '/personvern' },
        { name: 'Kommende arrangementer', path: '/#allEvents' },
        { name: 'Tidligere arrangementer', path: '/alle-arrangementer' },
    ];

    const defualtMenuIcon = <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

    const burgerMenuIcon = <Image src="/images/burger-menu.png" alt="Menu button" width={50} height={50} />

    const fadeInAnimation: Variants = {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05 * index,
            }
        }),
    }

    useEffect(() => {
        // Scroll to the element with ID "allEvents" 
        if (window.location.hash === '#allEvents') {
          scrollIntoTheView('allEvents');
        }
      }, []);

    return (
        <div className="bg-darkblue">
            <nav className="flex items-center justify-between py-4 sm:pb-0 sm:pt-1 sm:pl-3 pl-5 text-white text-2xl font-semibold">
                <div className='sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
                    <DropDownMenu menuItems={burgerMenyuItems} title="" menuIcon={burgerMenuIcon} textSize='text-2xl' />
                </div>
                <ul className="flex space-x-7 -space-y-0 tracking-tight leading-none">

                    {homePageMenuItems.map((item, index) => (
                        <motion.li key={index} className='sm:hidden md:block lg:block xl:block 2xl:block'
                            initial="initial"
                            variants={fadeInAnimation}
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            whileHover={{ scale: 1.1 }}
                        >
                            <Link key={index} href={item.path} className={`link ${pathname === item.path ? 'active-link' : ''} `}>{item.name}</Link>
                        </motion.li>

                    ))}
                    <motion.li className='sm:hidden md:block lg:block xl:block 2xl:block'
                        initial="initial"
                        variants={fadeInAnimation}
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={homePageMenuItems.length + 1}
                        whileHover={{ scale: 1.1 }}
                    >
                        <DropDownMenu menuItems={eventsMenuItems} title="Arrangementer" menuIcon={defualtMenuIcon} textSize='text-lg' />
                    </motion.li>
                </ul>
            </nav>
        </div>
    )
}

