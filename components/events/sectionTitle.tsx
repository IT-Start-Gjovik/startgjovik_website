import React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <>
        <div className='pt-20 px-6'>
            <h1 className='text-4xl md:text-6xl text-center'>{title}</h1>
        </div>
        <hr className='w-full h-1 mx-auto my-8 md:my-20 bg-gray-100 border-0 rounded' />
    </>
);

export default SectionTitle;
