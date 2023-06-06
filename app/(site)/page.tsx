import { getEventCards } from '@/backend/sanity-utils';
import EventCard from '@/components/events/eventCard';
import EventCardList from '@/components/events/eventCardList';
import Logo from '@/components/logo';
import { EventCardType } from '@/types/EventCardType';


export default async function Home() {
  
  // Fetch the projects 
  const events: EventCardType[] = await getEventCards();

  return (
    <main className="min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start">
      <Logo />

      {/** Paragraph for introduction */}
      <p className="font-sans text-xl flex justify-center mx-auto whitespace-pre-line break-words">
        En studentorganisasjon med lidenskap for
        entreprenørskap og bærekraftig utvikling 🚀
      </p>

      {/** Line Breaker */}
      <hr className="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10" />


      <div className="flex justify-center items-center">
        <h3 className="font-sans font-bold text-2xl">Kommende Arrangementer</h3>
      </div>



      {
        events && events.length > 0 ?
        events.map((event)=>{
          return <EventCard
            key={event._id}
            title = {event.title}
            description={event.description}
            imageUrl={event.image}
          />
        }) :

        <h2>Ingen kommende Arrangementer</h2>
      }

    </main>
  )
}
