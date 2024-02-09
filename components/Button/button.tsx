import Link from "next/link";
import { useState } from "react";

interface ButtonProps {
    text: string;
    link: string;
}

export default function Button({ text, link }: ButtonProps) {
    return (
        <Link href={link}>
            <button
                className={`ring-2 ring-[#B2C51F] bg-[#B2C51F] hover:bg-transparent text-white hover:text-[#B2C51F] 
                py-2 px-4 rounded active:text-black  active:ring-black`}>
                {text}
            </button>
        </Link>
    );
}

// ${disabled ? 'cursor-not-allowed' : ''}