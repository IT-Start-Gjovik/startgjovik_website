import { EventType } from '@/constants/events';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'

const Event: NextPage = () => {

  const [events, setEvents] = useState<EventType[]>([]);

  const fetchEvents = async () => {
    const response = await fetch("/api/events");
    const data = await response.json();
    setEvents(data);

  }

  useEffect(() => {fetchEvents()}, [])


  return (
    <>
      <Head>
        <title>Events</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

        <h1>Events!</h1>

        {events.map((event) => (
          <h1 key={event.id}>{event.title}</h1>
        )) ?? null}

      </main>


    </>
  )
}


export default Event;


