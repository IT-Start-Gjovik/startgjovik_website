import { EventCardType } from "@/types/EventCardType";
import EventCard from "./eventCard";
import Link from "next/link";


interface EventCardListProps {
    events: EventCardType[];
  }

export default function EventCardList({events }: EventCardListProps) {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center place-items-center mt-20 gap-3">
            {events && events.length > 0 ? (
                events.map((event) => {

                    // Information time and date formatted correctly 
                    let currentDate: Date = new Date(event.datetime);
                    let dateFormat: string =currentDate.getDay() + ". " + currentDate.toLocaleString("no-NO", { month: "long" }) + " " +  currentDate.getFullYear().toString();
                    let timeFormat: string = currentDate.getHours().toString() + ":" + currentDate.getMinutes().toString();


                    return (
                        <Link href={`/events/${event.slug}`} key={event._id}>
                            <EventCard
                                title={event.title}
                                description={event.description}
                                imageUrl={event.image}
                                date={dateFormat}
                                time={timeFormat}
                            />
                        </Link>
                    );
                })
            ) : (
                <h2>Ingen kommende Arrangementer</h2>
            )}
        </div>
    );
}
