import Link from "next/link";

// Interface for the event card
interface EventProps{
    imageUrl: string,
    title: string,
    date?: string,
    time?: string,
    description: string,
    slug: string
} 

// Event card itself
export default function EventCard({date, title, imageUrl, time, description, slug}: EventProps): JSX.Element {
    
    return (
        <div className='max-w-sm w-full lg:max-w-full lg:flex border rounded-lg shadow border-gray-700 bg-gray-800 hover:bg-gray-700'>
            <div
                className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden md:rounded-none md:rounded-l-lg'
                style={{ backgroundImage: `url(${imageUrl})` }}
                title='Event image'></div>
            <div className='flex flex-col border-r border-b border-l lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 justify-between leading-normal '>
                <div className='mb-4'>
                    <div className='mb-2 text-xl font-bold tracking-tight text-white'>{title}</div>
                    <p className='mb-3 font-normal text-gray-400'>{description}</p>
                </div>
                <div className='flex items-start flex-col'>
                    <h4> 📅 {date}</h4>
                    <h4>🕕 {time}</h4>
                    <Link
                        href={`/arrangementer/${slug}`}
                        className='inline-flex items-center w-full px-3 py-2 mt-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
                        Les meir{' '}
                        <svg aria-hidden='true' className='w-4 h-4 ml-2 -mr-1' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'></path>
                        </svg>{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
}
