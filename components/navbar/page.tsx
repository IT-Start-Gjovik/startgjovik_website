'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDownMenu from './dropDownMenu';
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { motion, Variants } from "framer-motion";

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

    const defualtMenuIcon = <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

    const burgerMenuIcon = <Image src="/images/burger-menu.png" alt="Menu button" width={50} height={50} />

    const fadeInAnimation: Variants = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.05 * index,
            }
        }),
    }

    return (
        <div className="bg-darkblue">
            <nav className="flex items-center justify-between py-4 phone:pb-0 phone:pt-1 phone:pl-3 pl-5 text-white text-2xl font-semibold">
                <div className='tablet:hidden desktop:hidden'>
                    <DropDownMenu menuItems={homePageMenuItems} title="" menuIcon={burgerMenuIcon} textSize='text-2xl' />
                </div>
                <ul className="flex space-x-7 -space-y-0 tracking-tight leading-none">

                    {homePageMenuItems.map((item, index) => (

                        <motion.li key={index} className='phone:hidden'
                            initial="initial"
                            variants={fadeInAnimation}
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            <Link key={index} href={item.path} className={`link ${pathname === item.path ? 'active-link' : ''} `}>{item.name}</Link>
                        </motion.li>

                    ))}
                    <motion.li className='phone:hidden'
                        initial="initial"
                        variants={fadeInAnimation}
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={homePageMenuItems.length + 1}
                    >
                        <DropDownMenu menuItems={eventsMenuItems} title="Arrangementer" menuIcon={defualtMenuIcon} textSize='text-lg' />
                    </motion.li>
                </ul>
            </nav>
        </div>
    )
}