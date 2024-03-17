import React from 'react';

type SectionTitleProps = {
    title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
    <>
        <div className='pt-10 px-6 text-center'>
            <h1 className='text-4xl md:text-6xl text-[#B2C51F] leading-tight font-bold'>
                {title}
            </h1>
        </div>
    </>
);

export default SectionTitle;
