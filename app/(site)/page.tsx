import EventCard from '@/components/events/eventCard'
import Logo from '@/components/logo'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-t from-gradient-start to-gradient-end">
      <Logo />

      {/** Paragraph for introduction */}
      <p className="font-sans text-xl flex justify-center mx-auto whitespace-pre-line break-words">
        En studentorganisasjon med lidenskap for 
        entreprenørskap og bærekraftig utvikling 🚀
      </p>

      {/** Line Breaker */}
      <hr className="w-96 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>


      <div className="flex justify-center items-center">
        <h3 className="font-sans font-bold text-2xl">Kommende Arrangementer</h3>
      </div>


      <EventCard
        title="Case Breaker 2023"
        description="Case Breaker handler om å pitche gode løsninger foran en jury. Du kan vinne store penge premier"
        imageUrl="/images/test.png"
       />

      




    </main>
  )
}
