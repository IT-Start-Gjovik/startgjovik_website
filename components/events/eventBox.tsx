import Image from 'next/image';
import Link from 'next/link';

type EventBoxProps = {
    id: string;
    imageUrl: string;
    title: string;
    alt: string;
    link: string;
};

const EventBox: React.FC<EventBoxProps> = ({ imageUrl, title, alt, link }) => {
    return (
        <div className='flex flex-col items-center py-4 px-10 bg-gray-800 rounded-md shadow-lg'>
            <Image src={imageUrl} alt={alt} width={200} height={200} className='rounded-md mt-10 mb-8' />

            <h3 className='mt-4 text-xl text-gray-200 hover:text-gray-400 transition duration-300 text-center w-full'>{title}</h3>

            <Link href={link} passHref>
                <button className='mt-4 mb-5 px-4 py-2 bg-blue-700 text-gray-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-900 transition duration-300 flex items-center'>
                    Les mer
                    <svg aria-hidden='true' className='ml-2 -mr-1 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Arrow</title>
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
