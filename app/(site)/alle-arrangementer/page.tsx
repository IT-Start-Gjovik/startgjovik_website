'use client';

import { getPastEventCards } from '@/backend/sanity-utils';
import EventBox from '@/components/events/eventBox';
import { events } from '@/components/events/eventData';
import EventHeroContent from '@/components/events/eventHeroContent';
import Hero from '@/components/hero/hero';
import { EventCardType } from '@/types/EventCardType';
import React, { useEffect, useState } from 'react';

const eventHeroProps = {
    title: 'Våre arrangementer',
    color: '#f5f5f5',
    textColor: 'black',
    imageSrc: '/images/our-events-hero-image.jpg',
    logo: false,
    content: <EventHeroContent />,
    contentBackground: '/images/hero-background-white.png',
};

export default function AllEventsPage() {
    return (
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
    );
}
