import Link from 'next/link';

interface ButtonProps {
    link: string;
    text: string;
}

export default function BackButton({ link, text }: ButtonProps) {
    return (
        <Link
            href={link}
            className='px-3 py-2 mt-10 gap-2 text-sm focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-200 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700'>
            {text}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 inline-block ml-2'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path
                    fillRule='evenodd'
                    d='M13.414 6L10 9.414 6.586 6 6 6.586 9.414 10 6 13.414l.586.586L10 10.586l3.414 3.414.586-.586L10.586 10l3.414-3.414z'
                    clipRule='evenodd'
                />
            </svg>
        </Link>
    );
}

