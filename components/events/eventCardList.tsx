import { getEventCards } from "@/backend/sanity-utils";
import { EventCardType } from "@/types/EventCardType";
import EventCard from "./eventCard";

export default async function EventCardList() {
    // Fetch all cards 
    const events: EventCardType[] = await getEventCards();

    return (
        <>
            {events.map((event) => (
                <EventCard
                    key={event._id}
                    title={event.title}
                    description={event.description}
                    imageUrl={event.image}
                />
            ))}
        </>
    );
}