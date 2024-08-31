import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/button';

// Typescript interface for props passed to the EventBox component
type EventBoxProps = {
    id: string;
    imageUrl: string;
    title: string;
    alt: string;
    link: string;
};

// This component displays a brief overview of an event (like a card)
const EventBox: React.FC<EventBoxProps> = ({ imageUrl, title, alt, link }) => {
    return (
        <div className='group flex flex-col items-center py-8 px-5 md:px-6 bg-[#132d4e] rounded-lg shadow-xl transition duration-500 hover:shadow-2xl mx-4 my-4'>
            <div className='w-32 h-32 md:w-40 md:h-40 bg-white rounded-full p-2 group-hover:rotate-6 transition-transform duration-300'>
                <Image
                    src={imageUrl}
                    alt={alt}
                    width={150}
                    height={150}
                    className='rounded-full shadow-sm'
                />
            </div>
            <h3 className='text-xl md:text-2xl font-bold text-white mt-4 mb-2 text-center'>
                {title}
            </h3>
            <Button text='Les mer' link={link} dark adaptiv />
        </div>
    );
};

export default EventBox;
