"use client"; // Use client to render the page 

import { getEventPage } from "@/backend/sanity-utils";
import { EventPageType } from "@/types/EventPageType";
import { PortableText } from '@portabletext/react';
import ErrorPage from "../../404/page";
import Image from "next/image";
import Link from "next/link";

// Props for the event page 
type Props = {
  params: { eventPage: string }
}

export default async function PageForEvent({ params }: Props) {
  const slug = params.eventPage; // Slug to the page

  // Get the details for the event page
  const event: EventPageType = await getEventPage(slug);

  // If the event does not exist, return the error page 
  if (!event){
    return <ErrorPage />
  }
  console.log("URL:" + event.url)

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-black">{event.title}</h1>
      <Image src={event.image} alt={event.title} className="my-4" width={500} height={500} />
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={event.content} />
      </div>
      <Link href={event.url} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">
          Register
      </Link>
    </div>)
} 