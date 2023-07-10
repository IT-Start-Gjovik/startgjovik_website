"use client";

import { EventCardType } from "@/types/EventCardType";
import EventCard from "./eventCard";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "../UI/Spinner";


// Props for the event card 
interface EventCardListProps {
  events: EventCardType[];
}

export default function EventCardList({ events }: EventCardListProps) {
  return (
    <>
      {events.map((event) => {
        return <EventCard description={event.description} imageUrl={event.image} title={event.title} key={event._id} date={event.datetime} slug={event.slug}/>;
      })}
    </>
  );
}
