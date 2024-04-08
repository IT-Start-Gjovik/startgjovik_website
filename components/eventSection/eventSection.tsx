import { EventCardType } from '@/types/EventCardType';
import NoEvents from '../UI/noEventsFound';
import EventCardList from '../events/eventCardList';

export default function EventSection({ events }: { events: EventCardType[] }) {
    return (
        <>
            {/**List of events */}
            <div className='bg-white pt-10 pb-3'>
                <h3 className='text-[#132D4E] font-semibold md:text-center text-4xl md:text-5xl py-5 px-8'>
                    Kommende Arrangementer
                </h3>

                {/** Listing all events if there are any  */}
                <div
                    id='allEvents'
                    className='flex flex-wrap justify-center gap-6 p-8'>
                    {events && events.length > 0 ? (
                        <>
                            <EventCardList events={events} />
                        </>
                    ) : (
                        <NoEvents />
                    )}
                </div>
            </div>
        </>
    );
}
