import { EventCardType } from '@/types/EventCardType';
import NoEvents from '../UI/noEventsFound';
import EventCardList from '../events/eventCardList';

export default function EventSection({ events }: { events: EventCardType[] }) {
    const validEvents = events.filter(
        (event) => new Date(event.datetime) > new Date(),
    );
    let previousEvents = events.filter(
        (event) => new Date(event.datetime) < new Date(),
    );
    return (
        <div className='bg-white pt-10 pb-3'>
            <h3 className='text-[#132D4E] font-semibold md:text-center text-4xl md:text-5xl py-5 px-8'>
                Kommende arrangementer
            </h3>

            <div id='allEvents' className='flex flex-wrap justify-center gap-6 p-2'>
                {events && validEvents.length > 0 ? (
                    <>
                        <EventCardList events={validEvents} />
                    </>
                ) : (
                    <NoEvents events={previousEvents} />
                )}
            </div>
        </div>
    );
}
