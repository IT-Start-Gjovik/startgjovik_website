import BackButton from '@/components/UI/backbutton';
import Logo from '@/components/UI/logo';
import { Aboutstart } from '@/components/aboutStart/aboutstartText';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import { StartMembers } from '@/components/startMembers/startBoardList';

export default function AboutUsPage() {
    return (
        <main className='bg-gray-900 min-h-screen'>
            <Header />
            <Logo />
            <Aboutstart />
            <StartMembers />
            <Footer />
        </main>
    );
}
