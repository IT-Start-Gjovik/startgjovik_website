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
import Image from 'next/image';
import Button from '@/components/Button/button';

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
                <Logo />

                {/** Paragraph for introduction */}
                <HeaderJumbotron />

                {/**Cards with info about Start Gjøvik */}
                <Hero />

                {/** Line Breaker */}
                <hr className='w-4/5 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />
              

                {/**List of events */}
                <div className='bg-white'>
                    <div className='flex justify-center items-center'>
                        <h3 className='text-[#132D4E] font-bold text-[64px] mt-8'>Kommende Arrangementer</h3>
                    </div>
                    
                    {/** Listing all events if there are any  */}
                    <div id='allEvents' className='flex flex-wrap justify-center gap-6 p-8  '>
                        {events && events.length > 0 ? (
                            <>
                                <EventCardList events={events} />
                            </>
                        ) : (
                            <NoEvents />
                        )}
                    </div>
                </div>

                {/** Join/work with us */}
                <div className='bg-[#132D4E] h-[198px] w-full'>
                </div>

                {/** Sustainability */}
                <div className='bg-white grid grid-cols-2 p-[100px]'>
                    <div className='flex justify-end p-6'>
                        <Image
                            src='/images/sustainability/bærekraft.png'
                            alt='placeholder'
                            width={1200}
                            height={620}
                            objectFit='contain'
                        />
                    </div>
                    <div className='p-6 '>
                        <h1 className='text-[#132D4E] text-[64px] font-bold'>Bærekraft</h1>
                        <p className='text-[30px] text-black'>
                            Vi tror på kraften i ungdommelig kreativitet og engasjement for å
                            forme en mer bærekraftig fremtid.
                        </p>
                        <Button text="LES MER OM BÆREKRAFT" link="/baerekraft" adaptiv={true}/>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
