'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDownMenu from './dropDownMenu';
import Image from 'next/image'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Navbar() {
    const pathname = usePathname()

    const homePageMenuItems = [
        { name: 'Hjem', path: '/' },
        { name: 'Bærekraft', path: '/baerekraft' },
        { name: 'For Bedrifter', path: '/for-bedrifter' },
        { name: 'Personvern', path: '/personvern' },
      ];

    const eventsMenuItems = [
        { name: 'Kommende arrangementer', path: '/' },
        { name: 'Tidligere arrangementer', path: '/about' },
      ];

    const defualtMenuIcon = <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

    const burgerMenuIcon = <Image src="/images/burger-menu.png" alt="Menu button" width={20} height={20} />

    return (
        <div className="bg-darkblue">
            <nav className="flex items-center justify-between py-4 pl-5 text-white text-2xl">
                <div className='tablet:hidden desktop:hidden XLdesktop:hidden'>
                    <DropDownMenu menuItems={homePageMenuItems} title="" menuIcon={burgerMenuIcon}/>
                </div>
                <ul className="flex space-x-7 -space-y-0 tracking-tight leading-none">
                    {homePageMenuItems.map((item, index) => (
                    <li className='phone:hidden'>
                        <Link key={index} href={item.path} className={`link ${pathname === item.path ? 'active-link' : ''} `}>{item.name}</Link>
                    </li>
                    ))}

                    <li className='phone:hidden'>
                         <DropDownMenu menuItems={eventsMenuItems} title="Arrangementer" menuIcon={defualtMenuIcon}/>
                    </li>
                </ul>
            </nav>       
        </div>
    )
}