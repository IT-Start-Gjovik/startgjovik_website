import Image from 'next/image';
import React from 'react';

// Logo of Start Gjøvik.
// Uses the one without any background and white text
// (LOGO VERSION 2022)
interface LogoProps {
    className?: string;
}
export default function Logo({ className }: LogoProps) {
    return (
        <Image
            alt='Start Logo'
            src={'/images/startLogo.png'}
            className={`flex justify-center mx-auto py-5 ${
                className ? className : ' '
            }`}
            width={600}
            height={200}
        />
    );
}
