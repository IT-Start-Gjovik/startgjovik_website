import React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <>
        <div className='pt-10 px-6 text-center'>
            <h1 className='text-4xl md:text-6xl text-white leading-tight font-bold'>{title}</h1>
            <div className='flex justify-center items-center mt-4 mb-8'>
                <span className='text-blue-500 mr-2'>✦</span> {/* Decorative element */}
                {/* Full-width hr with gradient */}
                <hr className='w-full h-1 bg-gradient-to-r from-purple-300 via-pink-500 to-blue-500 border-0 rounded-full' />
                <span className='text-blue-500 ml-2'>✦</span> {/* Decorative element */}
            </div>
        </div>
    </>
);

export default SectionTitle;
