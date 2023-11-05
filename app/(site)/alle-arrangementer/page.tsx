import BackButton from '@/components/UI/backbutton';
import Footer from '@/components/footer/footer';
import EventBox from '@/components/events/eventBox';

export default function AllEventsPage() {
    // Sample data for the events. Replace with your actual data.
    const events = [
        { imageUrl: '/public/images/startLogo.png', title: 'BCM', link: '/event/1' },
        { imageUrl: '/path/to/image2.jpg', title: 'Casebreaker', link: '/event/2' },
        { imageUrl: '/path/to/image3.jpg', title: 'Hvordan starte bedrift fra A til Å', link: '/event/3' },
        { imageUrl: '/path/to/image4.jpg', title: 'Idèkonkurranse', link: '/event/4' },
        { imageUrl: '/path/to/image5.jpg', title: 'Møt en gründer', link: '/event/5' },
        { imageUrl: '/path/to/image6.jpg', title: 'Andre arrangementer', link: '/event/6' },
    ];

    return (
        <main className='bg-gray-900 min-h-screen flex flex-col items-center justify-start'>
            <div className='pt-10 px-6'>
                <h1 className='text-4xl md:text-6xl'>🏆 Våre arrangementer</h1>
            </div>

            <hr className='w-4/5 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />

            <div className='grid md:grid-cols-3 gap-8 my-8 w-full max-w-5xl'>
                {events.map((event, index) => (
                    <EventBox key={index} imageUrl={event.imageUrl} title={event.title} link={event.link} />
                ))}
            </div>

            <div className='pt-10 px-6'>
                <h1 className='text-4xl md:text-6xl'>⌛️ Tidligere arrangementer</h1>
            </div>

            <hr className='w-4/5 h-1 mx-auto my-20 bg-gray-100 border-0 rounded md:my-10' />

            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>

            <footer className='w-full fixed bottom-0 '>
                <Footer />
            </footer>
        </main>
    );
}
