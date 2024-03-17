'use client';

import { getPastEventCards } from '@/backend/sanity-utils';
import EventBox from '@/components/events/eventBox';
import { events } from '@/components/events/eventData';
import Footer from '@/components/footer/footer';
import { EventCardType } from '@/types/EventCardType';
import React, { useEffect, useState } from 'react';
import Header from '@/components/header/page';
import Hero from '@/components/hero/hero';
import EventHeroContent from '@/components/events/eventHeroContent';

const eventHeroProps = {
    title: 'Våre arrangementer',
    color: '#f5f5f5',
    textColor: 'black',
    imageSrc: '/images/events/BCM.png',
    logo: false,
    content: <EventHeroContent />,
};

export default function AllEventsPage() {
    const [pastEvents, setPastEvents] = useState<EventCardType[]>([]);
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        getPastEventCards()
            .then((data) => {
                setPastEvents(data);
                setError(null); // Clear any previous error
            })
            .catch((error) => {
                console.error('Error fetching past events:', error);
                setError('Failed to load past events. Please try again later.');
            });
    }, []);

    return (
        <div>
            <Header />
            <main>
                <Hero {...eventHeroProps} />
                <div className='bg-[#f5f5f5]'>
                    <section className='grid md:grid-cols-3 gap-8 py-8 w-full max-w-5xl mx-auto px-4 md:px-0'>
                        {events.map((event) => (
                            <EventBox key={event.id} {...event} />
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
