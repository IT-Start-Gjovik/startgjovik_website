'use client'; // Use client to render the page

import { getCurrentEventCards } from '@/backend/sanity-utils';
import BackButton from '@/components/UI/backbutton';
import LoadingPage from '@/components/loadingPage/loadingPage';
import { EventPageType } from '@/types/EventPageType';
import getDateTimeFormat from '@/utils/date';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Props for the event page
type Props = {
    params: { eventPage: string };
};

export default function PageForEvent({ params }: Props) {
    const [eventPage, setEventPage] = useState<EventPageType | null>(null);

    const slug = params.eventPage;
    const router = useRouter();

    useEffect(() => {
        if (!slug) router.push('/');
        if (!eventPage) {
            getCurrentEventCards(slug)
                .then((data) => {
                    if (!data) {
                        router.push('/feilside');
                    }
                    setEventPage(data);
                })
                .catch((error) => console.log('Error: ', error));
        }
    }, [slug, eventPage, router]);

    if (!eventPage) {
        return <LoadingPage />;
    }

    // Information time and date formatted correctly
    let { dateFormat, timeFormat } = getDateTimeFormat(eventPage.datetime);
    let isOver: boolean = new Date() > new Date(eventPage.datetime);

    const EventOverBadge = () => {
        return isOver ? (
            <span className='bg-red-100 ms-2 text-red-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded '>
                Påmelding Lukket!
            </span>
        ) : null;
    };

    return (
        <div className='flex flex-col min-h-screen bg-[#132D4E] pt-28'>
            <main className='flex justify-center items-center min-h-screen'>
                <div className='max-w-2xl w-full bg-white text-black shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                    <div className='p-4 md:p-8'>
                        <h1 className='text-3xl md:text-4xl font-bold pt-2 pb-6 text-center'>
                            {eventPage.title}
                        </h1>
                        <img
                            src={eventPage.image}
                            alt={eventPage.title}
                            className='w-full h-auto object-cover min-w-60 rounded-t-3xl mx-auto'
                        />
                        <div className='flex justify-center items-center mt-4'>
                            <span className='text-sm md:text-base font-medium  mr-2'>
                                📅 {dateFormat}
                            </span>
                            <span className='text-sm md:text-base font-medium '>
                                ⏰ {timeFormat}
                            </span>
                            <EventOverBadge />
                        </div>

                        <hr className='my-6 border-black' />

                        <PortableText
                            value={eventPage.content}
                            components={RichTextComponent}
                        />

                        <div className='mt-6 flex justify-center items-center space-x-4 text-white'>
                            <BackButton link='/' text='Tilbake' direction='left' />
                            <BackButton
                                link={eventPage.url}
                                text='Påmelding'
                                direction='right'
                                disabled={isOver}
                                style={{
                                    cursor: isOver ? 'not-allowed' : 'pointer',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// @ts-ignore
const RichTextComponent: PortableTextReactComponents = {
    types: {
        // Add any custom types if needed, e.g. images or other custom components
        // Example:
        image: ({ value }) => <img src={value.src} alt={value.alt} />,
    },
    block: {
        h1: ({ children }: any) => <h1 className='text-4xl'>{children}</h1>,
        h2: ({ children }: any) => <h2 className='text-3xl'>{children}</h2>,
        h3: ({ children }: any) => <h3 className='text-2xl'>{children}</h3>,
        h4: ({ children }: any) => <h4 className='text-xl'>{children}</h4>,
        h5: ({ children }: any) => <h5 className='text-lg'>{children}</h5>,
        normal: ({ children }: any) => <p className='text-base'>{children}</p>, // Default for normal paragraphs
    },
    marks: {
        link: ({ children, value }) => {
            const target = (value?.href || '').startsWith('http')
                ? '_blank'
                : undefined;
            return (
                <Link
                    href={value?.href}
                    target={target}
                    rel={target ? 'noopener noreferrer' : undefined}
                    className=' text-bg-primary-dark hover:text-cyan-950'>
                    {children}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-5 ms-1 mb-1 inline'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                        />
                    </svg>
                </Link>
            );
        },
    },
    list: {
        bullet: ({ children }) => <ul className='list-disc ml-4'>{children}</ul>,
        number: ({ children }) => <ol className='list-decimal ml-4'>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li>{children}</li>,
        number: ({ children }) => <li>{children}</li>,
    },
    hardBreak: () => <br />,
};
