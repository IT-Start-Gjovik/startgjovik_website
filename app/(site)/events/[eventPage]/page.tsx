"use client"; // Use client to render the page 

import { getEventPage } from "@/backend/sanity-utils";
import { EventPageType } from "@/types/EventPageType";
import { PortableText } from '@portabletext/react';
import ErrorPage from "../../404/page";

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

  return (
  <div>
    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={event.content} />
    </div>
  </div>)
} 