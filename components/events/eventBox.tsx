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
        <div className='flex flex-col items-center py-4 px-2 md:px-10 bg-gray-800 rounded-md shadow-lg max-w-xs mx-16 md:mx-0'>
            {/* Image component for event thumbnail */}
            <Image
                src={imageUrl}
                alt={alt}
                width={150}
                height={150}
                sizes='(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px'
                className='rounded-md mt-6 md:mt-10 mb-4 md:mb-8'
            />

            {/* Event title */}
            <h3 className='mt-2 text-lg md:text-xl text-gray-200 hover:text-gray-400 transition duration-300 text-center w-full'>{title}</h3>

            {/* Link to the event's detailed page */}
            <Link href={link} passHref>
                <button className='mt-2 md:mt-4 mb-3 md:mb-5 px-3 md:px-4 py-1 md:py-2 bg-blue-700 text-gray-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-900 transition duration-300 flex items-center'>
                    Les mer {/* "Read more" in Norwegian */}
                    {/* Arrow icon indicating action */}
                    <svg
                        aria-hidden='true'
                        className='ml-1 md:ml-2 -mr-0.5 md:-mr-1 w-4 md:w-5 h-4 md:h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <title>Arrow</title> {/* Title for the SVG for accessibility purposes */}
                        <path
                            fillRule='evenodd'
                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                            clipRule='evenodd'></path>
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default EventBox;
