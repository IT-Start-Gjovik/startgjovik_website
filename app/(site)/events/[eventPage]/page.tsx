"use client"; // Use client to render the page 

import { getEventPage } from "@/backend/sanity-utils";
import { EventPageType } from "@/types/EventPageType";

import {PortableText} from '@portabletext/react'
import Footer from "@/components/footer/footer";
import BackButton from "@/components/UI/backbutton";
import RegistrerButton from "@/components/UI/registrerbutton";

// Props for the event page 
type Props = {
  params: { eventPage: string }
}

export default async function PageForEvent({ params }: Props) {
  const slug = params.eventPage; // Slug to the page

  // Get the details for the event page
  const event: EventPageType = await getEventPage(slug);

  // If the event does not exist, return the error page 
  if (!event) {
   return <p>Error loading the event</p>
  }

  // Information time and date formatted correctly 
  let currentDate: Date = new Date();
  let eventDate: Date = new Date(event.datetime);
  let dateFormat: string = eventDate.getDay() + ". " + eventDate.toLocaleString("no-NO", { month: "long" }) + " " + eventDate.getFullYear().toString();
  let timeFormat: string = eventDate.getHours().toString() + ":" + eventDate.getMinutes().toString();
  let isOver: Boolean = currentDate > eventDate;

  const EventOverBadge = () => {
    return (
      isOver ? (
        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded ">
          Påmelding Lukket!
        </span>
      ) : null
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start">
      <main className=" flex justify-center min-h-screen">
        <div className="bg-slate-100 w-3/4 h-fit p-20">
          <h1 className="text-6xl font-bold text-black">{event.title}</h1>

          <h2 className="text-black text-2xl my-5"> 📅 {dateFormat}  |  🕕 {timeFormat} <EventOverBadge /> </h2>

          <hr className="h-1 my-8 border-0 bg-gray-800" />

          <div className="text-lg text-gray-800 mt-5 mx-10">
            <PortableText value={event.content} />
          </div>


          <div className="flex justify-left gap-2">

            <RegistrerButton isEventOverBoolean={isOver ? true : false} urlToForm={event.url} />

            <BackButton link="/" text="Tilbake" />

          </div>
          

        </div>
      </main>
      <Footer />
    </div>
  );
}