'use client';
import Link from 'next/link';

import React, { useEffect, useState } from 'react';
import {
    mainMenuItems,
    secondaryMenuItems,
    socialMediaLinks,
} from './hambugerMenuItems';

export default function DropDownMenu({
    sidebar,
    showSidebar,
}: {
    sidebar: boolean;
    showSidebar: () => void;
}) {
    useEffect(() => {
        // This code will only run on the client side
        const main = document.querySelector('main');
        const footer = document.querySelector('footer');

        if (sidebar) {
            main?.setAttribute('style', 'filter: brightness(0.5)');
            footer?.setAttribute('style', 'filter: brightness(0.5)');
        } else {
            main?.removeAttribute('style');
            footer?.removeAttribute('style');
        }

        // Cleanup function to remove styles when the component unmounts or updates
        return () => {
            main?.removeAttribute('style');
            footer?.removeAttribute('style');
        };
    }, [sidebar]); // Dependency array, this effect runs when `isSidebarActive` changesdency array, this effect runs when `isSidebarActive` changes
    return (
        <aside
            className={`fixed top-0 w-full  h-screen p-4 pt-0 right-0 md:max-w-[426px] overflow-y-auto  text-white ease-in-out duration-500 bg-bg-primary-dark z-50 ${
                sidebar ? 'translate-x-0 ' : 'translate-x-full'
            }`}>
            <button
                className='flex justify-end cursor-pointer z-50 w-full p-5 pt-0'
                onClick={showSidebar}>
                <svg
                    width='35'
                    height='35'
                    viewBox='0 0 25 26'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                    className='mt-8 '>
                    <path
                        d='M3.56665 3.39648L21.8501 22.453'
                        stroke='white'
                        strokeWidth='4'
                    />
                    <path
                        d='M3.23779 22.478L21.7394 3.68639'
                        stroke='white'
                        strokeWidth='4'
                    />
                </svg>
            </button>
            <div>
                <ul className='nav-menu'>
                    {mainMenuItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.path}
                                className='text-[20px] border-b-[1px] border-solid border-gray-600 flex flex-wrap px-[25px] py-[5px]  text-white'
                                onClick={() => {
                                    showSidebar();
                                }}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='mt-8'>
                    <ul className=''>
                        {secondaryMenuItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    className='text-[16px] flex flex-wrap px-[25px] py-[4px] '
                                    onClick={() => {
                                        showSidebar();
                                    }}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-row mt-5 px-[25px] gap-3'>
                        {socialMediaLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    dangerouslySetInnerHTML={{
                                        __html: item.icon,
                                    }}></a>
                            </li>
                        ))}
                    </ul>
                    <p className='mt-5 px-[25px] text-[13px] text-gray-400'>
                        Opphavsrett @ 2024 Start Gjøvik, NO 918 138 358
                    </p>
                </div>
            </div>
        </aside>
    );
}
