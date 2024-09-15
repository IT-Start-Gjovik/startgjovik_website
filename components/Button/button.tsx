import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
    text: string;
    link: string;
    dark?: boolean;
    adaptiv?: boolean;
    children?: ReactNode;
}

export default function Button({
    text,
    link,
    adaptiv,
    dark = false,
    children,
}: ButtonProps) {
    return (
        <Link href={link}>
            <button
                className={`ring-2 ${children && 'flex flex-row items-center'} ${dark ? 'bg-btn-secondary text-bg-primary-dark ring-white hover:text-bg-primary' : 'bg-btn-secondary-dark ring-bg-primary-dark hover:text-black'} hover:bg-transparent hover:ease-out hover:duration-300 rounded-full font-semibold text-xl py-3 px-5 my-3 
                            ${adaptiv ? 'w-full ' : 'w-auto'}`}>
                {text}
                {children && <span>{children}</span>}
            </button>
        </Link>
    );
}
