import { EventCardType } from "@/types/EventCardType";
import EventCardList from "../events/eventCardList";
import NoEvents from "../UI/noEventsFound";

export default function EventSection({ events }: { events: EventCardType[]} ) { 
    return (
        <>
        {/**List of events */}
        <div className='bg-white'>
                    <div className='flex justify-center items-center'>
                        <h3 className='text-[#132D4E] font-bold text-[58px] mt-8'>
                            Kommende Arrangementer
                        </h3>
                    </div>

                    {/** Listing all events if there are any  */}
                    <div
                        id='allEvents'
                        className='flex flex-wrap justify-center gap-6 p-8  '>
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