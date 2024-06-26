'use client'; // Use client to render the page

import { getCurrentEventCards } from '@/backend/sanity-utils';
import BackButton from '@/components/UI/backbutton';
import RegistrerButton from '@/components/UI/registrerbutton';
import Footer from '@/components/footer/footer';
import LoadingPage from '@/components/loadingPage/loadingPage';
import { EventPageType } from '@/types/EventPageType';
import getDateTimeFormat from '@/utils/date';
import { PortableText } from '@portabletext/react';
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
                .catch((error) => console.log('Error catches!', error));
        }
    }, [slug, eventPage, router]);

    if (!eventPage) {
        return <LoadingPage />;
    }

    // Information time and date formatted correctly
    let { dateFormat, timeFormat } = getDateTimeFormat(eventPage.datetime);
    let isOver: Boolean = new Date() > new Date(eventPage.datetime);

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

                        <div className='prose prose-lg '>
                            <PortableText value={eventPage.content} />
                        </div>

                        <div className='mt-6 flex justify-center items-center space-x-4'>
                            <RegistrerButton
                                isEventOverBoolean={isOver ? true : false}
                                urlToForm={eventPage.url}
                            />
                            <BackButton link='/' text='Tilbake' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
