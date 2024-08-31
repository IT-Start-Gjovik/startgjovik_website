import Link from 'next/link';

interface ButtonProps {
    text: string;
    link: string;
    dark?: boolean;
    adaptiv?: boolean;
}

export default function Button({ text, link, adaptiv, dark = false }: ButtonProps) {
    return (
        <Link href={link}>
            <button
                className={`ring-2 ${dark ? 'bg-btn-secondary text-bg-primary-dark ring-white hover:text-bg-primary' : 'bg-btn-secondary-dark ring-bg-primary-dark hover:text-black'} hover:bg-transparent hover:ease-out hover:duration-300 rounded-full font-semibold text-xl py-3  px-5 my-3 
                            ${adaptiv ? 'w-full ' : 'w-auto'}`}>
                {text}
            </button>
        </Link>
    );
}
