"use client"; // Use client to render the page 

import { getEventPage } from "@/backend/sanity-utils";
import { EventPageType } from "@/types/EventPageType";
import { PortableText } from '@portabletext/react';
import ErrorPage from "../../404/page";
import Link from "next/link";
import Footer from "@/components/footer/footer";

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
    return <ErrorPage />
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


          <Link href={!isOver ? event.url : "#"} target="_blank" className={`inline-flex items-center px-3 py-2 mt-10 text-sm font-medium text-center rounded-lg  focus:ring-4 focus:outline-none ${isOver ? "cursor-not-allowed bg-gray-500" : "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 "
            } `}>
            Påmelding
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </Link>

        </div>
      </main>
      <Footer />
    </div>
    )
} 