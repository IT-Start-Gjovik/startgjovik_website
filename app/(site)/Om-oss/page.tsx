import BackButton from '@/components/UI/backbutton';
import Footer from '@/components/footer/footer';

export default function LesmerPage() {
    return (
        <main className='bg-gray-900 min-h-screen'>
            <div className='flex justify-center pt-10 px-6'>
                <h1 className='text-4xl md:text-6xl'> Om oss</h1>
            </div>
            <h2 className='text-2xl md:text-6xl'>Kommer snart....</h2>
            <p> her vil det stå mer om start....</p>
            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>
            <footer
                className='w-full fixed bottom-0 '>
                <Footer />
            </footer>
        </main>
    );
}