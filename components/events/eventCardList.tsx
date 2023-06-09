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

// Component for the list of events 
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
        <>
          {loading ? (
            <div className="flex justify-center my-20">
              <Spinner />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center mt-20 gap-5 md:flex-row">
              {events && events.length > 0 ? (
                events.map((event) => {
                  let currentDate: Date = new Date(event.datetime);
                  let dateFormat: string = currentDate.getDay() + ". " + currentDate.toLocaleString("no-NO", { month: "long" }) + " " +currentDate.getFullYear().toString();
                  let timeFormat: string = currentDate.getHours().toString() + ":" + currentDate.getMinutes().toString();
    
                  return (
                    <a
                      key={event._id}
                      onClick={(e: any) =>
                        handleClick(e, `/events/${event.slug}`)
                      }
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
                <div className="flex justify-center">
                  <h2 className="text-white text-xl">Ingen kommende Arrangementer! </h2>
                </div>
                
              )}
            </div>
          )}
        </>
      );
}
