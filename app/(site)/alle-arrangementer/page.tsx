import BackButton from '@/components/UI/backbutton';
import Footer from '@/components/footer/footer';
import EventBox from '@/components/events/eventBox';
import SectionTitle from '@/components/events/sectionTitle';
import { events } from '@/components/events/eventData';

export default function AllEventsPage() {
    return (
        <main className='bg-gray-900 min-h-screen flex flex-col items-center justify-start'>
            <header>
                <SectionTitle title='🏆 Våre arrangementer' />
            </header>

            <section className='grid md:grid-cols-3 gap-8 my-8 w-full max-w-5xl'>
                {events.map((event) => (
                    <EventBox key={event.id} {...event} />
                ))}
            </section>

            <section>
                <SectionTitle title='⌛️ Tidligere arrangementer' />
                <h2 className='text-2xl text-center md:text-4xl mt-4'>Kommer snart....</h2>
                <p className='mt-2 text-center'> Her vil det stå mer om tidligere arrangementer</p>
            </section>

            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>

            <footer className='w-full'>
                <Footer />
            </footer>
        </main>
    );
}
