import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Assume these are your hardcoded images
const hardcodedImages = ['/images/test1.png', '/images/test2.png', '/images/test3.png', '/images/test4.png'];

type PastEventBoxProps = {
    id: string;
    title: string;
    alt: string;
    link: string;
};

const PastEventBox: React.FC<PastEventBoxProps> = ({ title, alt, link }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hardcodedImages.length);
    };

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => {
            if (prevIndex === 0) {
                return hardcodedImages.length - 1;
            }
            return prevIndex - 1;
        });
    };

    return (
        <div className='group flex flex-col items-center py-4 px-4 md:px-6 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-lg shadow-xl transition duration-500 hover:shadow-2xl mx-4 my-4'>
            <h3 className='text-xl md:text-2xl font-bold text-white my-4 text-center transition-colors duration-300 group-hover:text-yellow-300'>{title}</h3>

            <div className='flex justify-center items-center w-full p-2 bg-white rounded-lg'>
                <Image src={hardcodedImages[currentImageIndex]} alt={alt} width={300} height={300} className='rounded-lg shadow-sm' />
            </div>

            <div className='flex w-full justify-around mt-4'>
                <button
                    onClick={goToPreviousImage}
                    className='px-4 py-2 bg-white text-gray-800 rounded-full font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-opacity-90 shadow-md group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white'>
                    Tilbake
                </button>
                <button
                    onClick={goToNextImage}
                    className='px-4 py-2 bg-white text-gray-800 rounded-full font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-opacity-90 shadow-md group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white'>
                    Neste
                </button>
            </div>
        </div>
    );
};

export default PastEventBox;
