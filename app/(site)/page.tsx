'use client';

import { getEventCards } from '@/backend/sanity-utils';
import Logo from '@/components/UI/logo';
import NoEvents from '@/components/UI/noEventsFound';
import EventSection from '@/components/eventSection/eventSection';
import EventCardList from '@/components/events/eventCardList';
import Footer from '@/components/footer/footer';
import FrontPage from '@/components/frontPage/frontPage';
import Header from '@/components/header/page';
import Hero from '@/components/heroSection/hero';
import HeaderJumbotron from '@/components/jumbotron/jumbotron';
import LoadingPage from '@/components/loadingPage/loadingPage';
import MiddleSection from '@/components/middleSection/middleSection';
import SustainabilitySection from '@/components/sustainabilitySection/sustainabilitySection';
import { EventCardType } from '@/types/EventCardType';
import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';
import ErrorPage from './feilside/page';

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
        <div className='flex flex-col overflow-y-auto min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            {/** Header */}
            <Header />
            <main className='min-h-screen'>
                <FrontPage/>
                {/**List of events */}
                <EventSection events={events}></EventSection>

                {/** Middle Section */}
                <MiddleSection />

                {/** Sustainability */}
                <SustainabilitySection />
            </main>

            <Footer />
        </div>
    );
}
