import { WeeklyActivityType, dayOfWeekInNorwegian } from '@/types/WeeklyActivityType';
import Image from 'next/image';

function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('no-NO', { month: 'short' });
    return `${day}. ${month}`;
}

function formatTime(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' });
}

export default function WeeklyActivityCard({ activity }: { activity: WeeklyActivityType }) {
    const showDate = activity.date;
    const showDayOfWeek = !activity.date && activity.dayOfWeek;

    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col'>
            {activity.image && (
                <div className='relative h-48 w-full'>
                    <Image
                        src={activity.image}
                        alt={activity.title}
                        width={400}
                        height={300}
                        className='object-cover w-full h-full'
                    />
                </div>
            )}
            <div className='p-6 flex-1 flex flex-col'>
                <div className='flex items-center gap-2 mb-3 flex-wrap'>
                    {showDate && activity.date && (
                        <>
                            <span className='bg-[#132D4E] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                {formatDate(activity.date)}
                            </span>
                            <span className='text-gray-600 text-sm font-medium'>
                                {formatTime(activity.date)}
                            </span>
                        </>
                    )}
                    {showDayOfWeek && activity.dayOfWeek && (
                        <>
                            <span className='bg-[#132D4E] text-white px-3 py-1 rounded-full text-sm font-semibold'>
                                {dayOfWeekInNorwegian[activity.dayOfWeek]}
                            </span>
                            {activity.time && (
                                <span className='text-gray-600 text-sm font-medium'>{activity.time}</span>
                            )}
                        </>
                    )}
                </div>
                <h4 className='text-xl font-bold text-[#132D4E] mb-2'>{activity.title}</h4>
                <p className='text-gray-600 mb-4 text-sm line-clamp-3 flex-1'>{activity.description}</p>
                
                <div className='space-y-3 mt-auto'>
                    {activity.location && (
                        <div className='flex items-center gap-2 text-gray-500 text-sm'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 flex-shrink-0'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                                />
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                                />
                            </svg>
                            <span>{activity.location}</span>
                        </div>
                    )}
                    {activity.registrationUrl && (
                        <a
                            href={activity.registrationUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='block w-full bg-[#132D4E] text-white text-center py-2.5 px-4 rounded-lg font-semibold hover:bg-[#1a3d66] transition-colors duration-200'
                        >
                            PÅMELDING
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

