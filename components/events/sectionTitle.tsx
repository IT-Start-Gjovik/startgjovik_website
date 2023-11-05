// SectionTitle.tsx

import React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <>
        <div className='pt-20 px-6'>
            <h1 className='text-4xl md:text-6xl'>{title}</h1>
        </div>
        <hr className='w-full h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />
    </>
);

export default SectionTitle;
