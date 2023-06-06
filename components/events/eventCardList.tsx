import { EventCardType } from "@/types/EventCardType";
import EventCard from "./eventCard";
import Link from "next/link";


interface EventCardListProps {
    events: EventCardType[];
  }

export default function EventCardList({events }: EventCardListProps) {

    return (
        <>
            {events && events.length > 0 ? (
                events.map((event) => {
                    return (
                        <Link href={`/events/${event.slug}`} key={event._id}>
                            <EventCard
                                title={event.title}
                                description={event.description}
                                imageUrl={event.image}
                            />
                        </Link>
                    );
                })
            ) : (
                <h2>Ingen kommende Arrangementer</h2>
            )}
        </>
    );
}
