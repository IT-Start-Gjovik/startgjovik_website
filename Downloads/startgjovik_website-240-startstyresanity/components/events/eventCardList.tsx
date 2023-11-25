import { EventCardType } from '@/types/EventCardType';
import EventCard from './eventCard';
import getDateTimeFormat from '@/utils/date';

// Props for the event card
interface EventCardListProps {
    events: EventCardType[];
}

export default function EventCardList({ events }: EventCardListProps) {
    return (
        <>
            {events.map((event) => {
                let { dateFormat, timeFormat } = getDateTimeFormat(event.datetime);
                return (
                    <EventCard
                        description={event.description}
                        imageUrl={event.image}
                        title={event.title}
                        key={event._id}
                        date={dateFormat}
                        slug={event.slug}
                        time={timeFormat}
                    />
                );
            })}
        </>
    );
}
