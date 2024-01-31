'use client';

import { getPastEventCards } from '@/backend/sanity-utils';
import BackButton from '@/components/UI/backbutton';
import EventBox from '@/components/events/eventBox';
import { events } from '@/components/events/eventData';
import PastEventBox from '@/components/events/pastEventBox';
import SectionTitle from '@/components/events/sectionTitle';
import Footer from '@/components/footer/footer';
import { EventCardType } from '@/types/EventCardType';
import React, { useEffect, useState } from 'react';

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
        <main className='bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen flex flex-col items-center justify-start'>
            <header>
                <SectionTitle title='Våre arrangementer' />
            </header>

            <section className='grid md:grid-cols-3 gap-8 my-8 w-full max-w-5xl'>
                {events.map((event) => (
                    <EventBox key={event.id} {...event} />
                ))}
            </section>

            <section>
                <SectionTitle title='Tidligere arrangementer' />
                {/* Change to a single-column grid layout */}
                <div className='grid grid-cols-1 gap-8 my-8 w-full max-w-5xl'>
                    {pastEvents.length > 0 ? (
                        pastEvents.map((event) => (
                            <PastEventBox
                                key={event._id}
                                id={event._id}
                                title={event.title}
                                alt={`Image for ${event.title}`}
                                link={`/arrangementer/${event.slug}`}
                            />
                        ))
                    ) : (
                        <p className='mt-2 text-center'>Ingen tidligere arrangementer.</p>
                    )}
                </div>
            </section>

            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>

            <footer className='w-full'>
                <Footer />
            </footer>
        </main>
    );
}
