import Link from "next/link";

interface ButtonProps {
    text: string;
    link: string;
    adaptiv?: boolean;
}

export default function Button({ text, link, adaptiv }: ButtonProps) {
    return (
        <Link href={link}>
            <button
                className={`ring-2 ring-[#B2C51F] text-white hover:text-[#B2C51F] bg-[#B2C51F] 
                            hover:bg-transparent hover:ease-out hover:duration-300
                            active:ring-black active:text-black active:duration-0 
                            px-[27px] py-[8px] rounded-full font-bold
                            ${adaptiv ? 'w-full' : 'w-auto'}`}>
                {text}
            </button>
        </Link>
    );
}
