import Link from 'next/link';
import { FC } from 'react';

interface GoToButtonProps {
    label: string;
    href: string;
    className?: string;
}

const GoToButton: FC<GoToButtonProps> = ({ label, href, className = '' }) => {
    return (
        <Link
            href={href}
            passHref
            className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900' ${className}`}>
            {label}
            <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 inline-block ml-2' fill='currentColor' viewBox='0 0 20 20'>
                <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                />
            </svg>
        </Link>
    );
};

export default GoToButton;
