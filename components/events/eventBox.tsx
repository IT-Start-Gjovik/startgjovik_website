import Image from 'next/image';
import Link from 'next/link';

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
            <Link
                href={link}
                passHref
                className='mt-4 mb-3 px-4 py-2 bg-[#B2c51f] text-white-800 rounded-full font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-opacity-90 flex items-center justify-center w-full shadow-md group-hover:scale-110 group-hover:text-white'>
                Les mer
                <svg
                    aria-hidden='true'
                    className='ml-2 -mr-1 w-5 h-5 text-blue-500'
                    fill='white'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'></path>
                </svg>
            </Link>
        </div>
    );
};

export default EventBox;
