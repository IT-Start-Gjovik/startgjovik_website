import BackButton from '@/components/UI/backbutton';
import Footer from '@/components/footer/footer';

export default function AllEventsPage() {
    return (
        <main className='bg-gray-900 min-h-screen flex flex-col items-center justify-start'>
            <div className='pt-10 px-6'>
                <h1 className='text-4xl md:text-6xl'>🏆 Våre arrangementer</h1>
            </div>
            <h2 className='text-2xl md:text-4xl mt-48'>Kommer snart....</h2>
            <p className='mt-2 text-center'> Her vil det stå mer om våre arrangementer</p>
            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>
            <footer className='w-full fixed bottom-0 '>
                <Footer />
            </footer>
        </main>
    );
}
