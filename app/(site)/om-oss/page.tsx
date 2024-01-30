
import BackButton from '@/components/UI/backbutton';
import Logo from '@/components/UI/logo';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
<<<<<<< HEAD
import { Aboutstart } from '@/components/aboutStart/aboutstartText';
import { StartMembers } from '@/components/startMembers/startBoardList';

export default function AboutUsPage() {
 
=======
import {Omstart }from '@/components/omstart/omstarttekst';
import { Startstyre } from '@/components/startstyre/styre';


export default function AboutUsPage() {
    
>>>>>>> origin/240-startstyresanity
    return (
        <main className='bg-gray-900 min-h-screen'>
            <Header />
            <Logo />
<<<<<<< HEAD
            <Aboutstart />
            <StartMembers />
=======
            <Omstart />
            <Startstyre />
>>>>>>> origin/240-startstyresanity
            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake' />
            </div>
            <Footer />
        </main>
    );
}


<<<<<<< HEAD
=======

>>>>>>> origin/240-startstyresanity
