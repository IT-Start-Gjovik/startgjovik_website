
import BackButton from '@/components/UI/backbutton';
import Logo from '@/components/UI/logo';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import { Aboutstart } from '@/components/aboutStart/aboutstartText';
import { StartMembers } from '@/components/startMembers/startBoardList';

export default function AboutUsPage() {
 
    return (
        <main className='bg-gray-900 min-h-screen'>
            <Header />
            <Logo />
            <Aboutstart />
            <StartMembers />
            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake' />
            </div>
            <Footer />
        </main>
    );
}


