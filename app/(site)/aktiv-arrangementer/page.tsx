'use client';

import React, { useState, useEffect } from 'react';
import { getEventCards } from '@/backend/sanity-utils';
import Hero from '@/components/hero/hero';
import EventCard from '@/components/events/EventCard';
import { EventCardType } from '@/types/EventCardType';

const ActiveArrangmenterProps = {
    title: 'Active Arrangmenter',
    color: '#132D4E',
    textColor: '#FFFFFF',
    imageSrc: '/images/events/BMC2.jpeg',
    logo: false,
    contentBackground: '/images/hero-background-blue.png',
};

export default function ActiveArrangmenter() {
    const [events, setEvents] = useState<EventCardType[]>([]);

    useEffect(() => {
        getEventCards().then((eventsData) => {
            setEvents(eventsData);
        });
    }, []);

    return (
        <div>
            <Hero {...ActiveArrangmenterProps} />
            <div className='flex flex-wrap justify-center items-stretch gap-4 p-4'>
                {events.map((event) => (
                    <EventCard
                        key={event._id}
                        imageUrl={event.image}
                        title={event.title}
                        date={event.datetime}
                        description={event.description}
                        slug={event.slug}
                    />
                ))}
            </div>
        </div>
    );
}
