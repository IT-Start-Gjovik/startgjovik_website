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
            <Button text='Les mer' link={link} dark>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='30'
                    height='30'
                    fill='currentColor'
                    viewBox='0 0 16 16'>
                    <path
                        fill-rule='evenodd'
                        d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8'
                    />
                </svg>
            </Button>
        </div>
    );
};

export default EventBox;
