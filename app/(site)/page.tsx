'use client';

import { getEventCards } from '@/backend/sanity-utils';
import { EventCardType } from '@/types/EventCardType';
import { useEffect, useState } from 'react';
import Footer from '@/components/footer/footer';
import Hero from '@/components/heroSection/hero';
import HeaderJumbotron from '@/components/jumbotron/jumbotron';
import Logo from '@/components/UI/logo';
import EventCardList from '@/components/events/eventCardList';
import NoEvents from '@/components/UI/noEventsFound';
import LoadingPage from '@/components/loadingPage/loadingPage';
import ErrorPage from './feilside/page';
import { NextResponse } from 'next/server';
import { useRouter } from 'next/navigation';
import Button from '@/components/events/eventButton';

export default function Home() {
    const [events, setEvents] = useState<EventCardType[]>();
    const router = useRouter();

    useEffect(() => {
        if (!events) {
            getEventCards()
                .then((data) => {
                    data.reverse();
                    setEvents(data);
                })
                .catch((error) => {
                    router.push('/feilside');
                });
        }
    }, [events, router]);

    if (!events) {
        return <LoadingPage />;
    }

    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            <main className='min-h-screen'>
                <Logo />

                {/** Paragraph for introduction */}
                <HeaderJumbotron />

                {/**Cards with info about Start Gjøvik */}
                <Hero />

                {/** Line Breaker */}
                <hr className='w-4/5 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />

                {/**List of events */}
                <div className='flex justify-center items-center'>
                    <h3 className='font-sans font-bold text-4xl px-10 sm:text-5xl'>📅 Kommende Arrangementer</h3>
                </div>

                {/** Button to navigate to the events we offer. */}
                <Button label='Se hvilke arrangementer vi tilbyr' onClick={() => router.push('/alle-arrangementer')} />

                {/** Listing all events if there are any  */}
                <div
                    className={`flex flex-col md:grid  xl:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] xl:max-w-${
                        events.length > 1 ? 'full' : 'min'
                    } mx-auto justify-center items-center w-full gap-4 px-5 sm:px-24 md:px-32 mt-10 md:mt-20 transition-all ease-out duration-300 `}>
                    {events && events.length > 0 ? <EventCardList events={events} /> : <NoEvents />}
                </div>
            </main>

            <Footer />
        </div>
    );
}
