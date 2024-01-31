import getEnglishMonth from '@/utils/englishMonth';
import { split } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

// Interface for the event card
interface EventProps {
    imageUrl: string;
    title: string;
    date?: string;
    time?: string;
    description: string;
    slug: string;
}

// Event card itself
const EventCard: React.FC<EventProps> = ({ date, title, imageUrl, time, description, slug }: EventProps) => {
    const [dayNum, monthNorwegian] = date ? split(date, ' ') : [null, null];

    const eventDateTime = date && time ? new Date(`${dayNum} ${getEnglishMonth(monthNorwegian as any)} ${new Date().getFullYear()} ${time}`) : null;
    console.log(eventDateTime);
    const currentDateTime = new Date();
    const eventFinished = eventDateTime && eventDateTime < currentDateTime;

    return (
        <article className='flex flex-col flex-grow max-w-lg md:max-w-[370px] rounded-lg shadow bg-gray-800 hover:bg-gray-700'>
            <Image src={imageUrl} alt='event image' layout='responsive' width={300} height={200} className='rounded-t-lg w-full object-cover max-h-[200px]' />
            <div className='flex-grow rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between'>
                <div>
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-400'>{description}</p>
                </div>
                <div>
                    {eventFinished ? (
                        <p className='bg-red-100 text-red-800 text-sm font-medium mr-2 px-3 py-2 rounded-lg inline'>⌛️ Arrangementet er over!</p>
                    ) : (
                        <>
                            <h4> 📅 {date}</h4>
                            <h4>🕕 {time}</h4>
                            <div className='mt-auto'>
                                <Link
                                    href={`/arrangementer/${slug}`}
                                    className='inline-flex items-center w-full px-3 py-2 mt-2 self-end text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
                                    Les meir{' '}
                                    <svg
                                        aria-hidden='true'
                                        className='w-4 h-4 ml-2 -mr-1'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            fillRule='evenodd'
                                            d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                            clipRule='evenodd'></path>
                                    </svg>{' '}
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
};

export default EventCard;
