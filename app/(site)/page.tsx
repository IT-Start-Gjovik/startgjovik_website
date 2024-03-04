'use client';

import { getEventCards } from '@/backend/sanity-utils';
import EventSection from '@/components/eventSection/eventSection';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import Hero from '@/components/hero/hero';
import HomeHeroContent from '@/components/home/homeHeroContent';
import LoadingPage from '@/components/loadingPage/loadingPage';
import MiddleSection from '@/components/middleSection/middleSection';
import SustainabilitySection from '@/components/sustainability/sustainabilitySection';
import { EventCardType } from '@/types/EventCardType';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const homePageProps = {
    title: 'VELKOMMEN TIL',
    color: '#132D4E',
    textColor: 'white',
    imageSrc: '/images/start_casebreaker.png',
    logo: true,
    content: <HomeHeroContent />,
};

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
                <Hero {...homePageProps} />
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
