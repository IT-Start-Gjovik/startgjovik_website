import Link from 'next/link';

interface ButtonProps {
    isEventOverBoolean: boolean;
    urlToForm: string;
}

export default function RegistrerButton({
    isEventOverBoolean,
    urlToForm,
}: ButtonProps) {
    return (
        <Link
            href={!isEventOverBoolean ? urlToForm : '#'}
            target={!isEventOverBoolean ? '_blank' : '_self'}
            className={`inline-flex items-center px-3 py-2 mt-10 text-sm font-medium text-center rounded-lg  focus:ring-4 focus:outline-none ${
                isEventOverBoolean
                    ? 'cursor-not-allowed bg-gray-500'
                    : 'ring-2 ring-[#B2C51F] text-white hover:text-[#B2C51F] bg-[#B2C51F] hover:bg-transparent hover:ease-out hover:duration-300 active:ring-black active:text-black active:duration-0'
            } `}>
            Påmelding
            <svg
                aria-hidden='true'
                className='w-4 h-4 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'></path>
            </svg>
        </Link>
    );
}
