"use client";

import { EventCardType } from "@/types/EventCardType";
import EventCard from "./eventCard";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface EventCardListProps {
    events: EventCardType[];
}




export default function EventCardList({events }: EventCardListProps) {

    // State for if the list is loading or not after being clicked on
    const [loading, setLoading] = useState(false); 

    // Router for sending to another page
    const router = useRouter();

    // Function for handling click on an event link
    const handleClick = (e:any, url: string) => {
        setLoading(true);
        router.push(url);
    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center mt-20 gap-3">
          {loading ? (
            <div>Loading...</div> // Display the loading div when loading is true
          ) : events && events.length > 0 ? (
            events.map((event) => {
              let currentDate: Date = new Date(event.datetime);
              let dateFormat: string =
                currentDate.getDay() +
                ". " +
                currentDate.toLocaleString("no-NO", { month: "long" }) +
                " " +
                currentDate.getFullYear().toString();
              let timeFormat: string =
                currentDate.getHours().toString() +
                ":" +
                currentDate.getMinutes().toString();
    
              return (
                <a
                  key={event._id}
                  onClick={(e: any) => handleClick(e, `/events/${event.slug}`)}
                >
                  <EventCard
                    title={event.title}
                    description={event.description}
                    imageUrl={event.image}
                    date={dateFormat}
                    time={timeFormat}
                  />
                </a>
              );
            })
          ) : (
            <h2>Ingen kommende Arrangementer</h2>
          )}
        </div>
      );
}
