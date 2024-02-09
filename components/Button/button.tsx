import Link from "next/link";


interface ButtonProps {
    text: string;
    link: string;
    disabled?: boolean;
}

export default function Button({ text, link, disabled }: ButtonProps) {

    return (
        <Link href={link}>
            <button
                disabled={disabled}
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${disabled ? 'cursor-not-allowed' : ''}`}>
                {text}
            </button>
        </Link>
    );
}