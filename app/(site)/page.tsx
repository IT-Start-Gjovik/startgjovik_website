'use client';

import { getEventCards } from '@/backend/sanity-utils';
import Logo from '@/components/UI/logo';
import NoEvents from '@/components/UI/noEventsFound';
import EventCardList from '@/components/events/eventCardList';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import Hero from '@/components/heroSection/hero';
import HeaderJumbotron from '@/components/jumbotron/jumbotron';
import LoadingPage from '@/components/loadingPage/loadingPage';
import { EventCardType } from '@/types/EventCardType';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import ErrorPage from './feilside/page';
import EventCard from '@/components/events/eventCard';

export default function Home() {
    const [events, setEvents] = useState<EventCardType[]>();
    const router = useRouter();

    useEffect(() => {
        if (!events) {
            getEventCards()
                .then((data) => {
                    console.log(data);
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
            {/** Header */}
            <Header />
            <main className='min-h-screen'>
                <Logo />

                {/** Paragraph for introduction */}
                <HeaderJumbotron />

                {/**Cards with info about Start Gjøvik */}
                <Hero />

                {/** Line Breaker */}
                <hr className='w-4/5 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />
                <div className='bg-white'>
                {/**List of events */}
                <div className='flex justify-center items-center'>
                    <h3 className='font-sans text-gray-900 font-bold text-4xl px-10 sm:text-5xl'>📅 Kommende Arrangementer</h3>
                </div>

                {/** Listing all events if there are any  */}
                <div id='allEvents' className='flex flex-wrap justify-center  px-5 mt-20 gap-5'>
                    {events && events.length > 0 ? (
                        <>
                            <EventCardList events={events} />
                        </>
                    ) : (
                        <NoEvents />
                    )}
                </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
