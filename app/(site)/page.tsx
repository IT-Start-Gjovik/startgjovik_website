import { getEventCards } from '@/backend/sanity-utils';
import Logo from '@/components/logo';
import { EventCardType } from '@/types/EventCardType';
import EventCardList from '@/components/events/eventCardList';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically load the list of components 
const EventCardListLocal = dynamic(() => import("@/components/events/eventCardList"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});


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

      {/** Using Suspense and the dynamically loaded list.  */}
      <Suspense fallback={<div>Loading...</div>}>
        <EventCardListLocal events={events} />
      </Suspense>

    </main>
  )
}
