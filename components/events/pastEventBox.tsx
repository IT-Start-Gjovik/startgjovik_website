import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type PastEventBoxProps = {
    id: string;
    imageUrl: string;
    title: string;
    alt: string;
    link: string;
};

const PastEventBox: React.FC<PastEventBoxProps> = ({ imageUrl, title, alt, link }) => {
    return (
        // Increase width and add image animation
        <div className='group flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-lg shadow-xl transition duration-500 hover:shadow-2xl mx-auto my-4 p-4 md:p-8 w-full md:max-w-7xl'>
            <div className='flex justify-center items-center md:w-1/3 p-2 bg-white rounded-lg'>
                <Image
                    src={imageUrl}
                    alt={alt}
                    width={300}
                    height={300}
                    className='rounded-lg shadow-sm border-2 border-white transition-transform duration-300 group-hover:scale-110'
                />
            </div>
            <h3 className='text-xl md:text-2xl font-bold text-white my-4 md:my-0 md:mx-4 flex-grow text-center transition-colors duration-300 group-hover:text-yellow-300'>
                {title}
            </h3>
            <Link
                href={link}
                className='px-6 py-3 bg-white text-gray-800 rounded-full font-medium text-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:bg-opacity-90 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white'>
                Bildegalleri
            </Link>
        </div>
    );
};

export default PastEventBox;
