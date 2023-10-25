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
    // Calculate the event date and time as a JavaScript Date object
    const eventDateTime = date && time ? new Date(`${date}T${time}`) : null;
    console.log('eventDateTime:', eventDateTime);
    // Get the current date and time as a JavaScript Date object
    const currentDateTime = new Date();
    console.log('currentDateTime:', currentDateTime);

    // Check if the event has finished by comparing eventDateTime and currentDateTime
    const eventFinished = eventDateTime && eventDateTime < currentDateTime;
    console.log('eventFinished:', eventFinished);
    
    return (
        <div className='max-w-sm w-full lg:max-w-full lg:flex lg:justify-stretch lg:items-stretch h-full rounded-lg shadow  bg-gray-800 hover:bg-gray-700'>
            <div
                className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden md:rounded-none md:rounded-l-lg'
                style={{ backgroundImage: `url(${imageUrl})` }}
                title='Event image'></div>
            <div className='flex flex-col rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal'>
                <div className='mb-4'>
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-gray-400'>{description}</p>
                </div>
                <div className='flex flex-col'>
                    {eventFinished ? (
                        <p className='bg-red-100 text-red-800 text-sm font-medium mr-2 px-3 py-2 rounded-lg dark:bg-red-900 dark:text-red-200 inline'>
                            ⌛️ Arrangementet er over!
                        </p>
                    ) : (
                        <>
                            <h4> 📅 {date}</h4>
                            <h4>🕕 {time}</h4>
                            <Link
                                href={`/arrangementer/${slug}`}
                                className='inline-flex items-center w-full px-3 py-2 mt-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
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
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// Export the EventCard component as the default export
export default EventCard;
