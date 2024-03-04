import BackButton from '@/components/UI/backbutton';
import { AboutStart } from '@/components/aboutStart/aboutstartText';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import { StartMembers } from '@/components/startMembers/startBoardList';
import AboutHeroContent from '@/components/aboutStart/aboutHeroContent';
import Hero from '@/components/hero/hero';

const aboutHeroProps = {
    title: 'Om oss',
    color: '#132D4E',
    textColor: '#FFFFFF',
    imageSrc: '/images/events/BCM.png',
    logo: false,
    content: <AboutHeroContent />,
};

export default function AboutUsPage() {
    return (
        <main className='bg-gray-900 min-h-screen text-white'>
            <Header />
            <Hero {...aboutHeroProps} />
            <AboutStart />
            <StartMembers />
            <Footer />
        </main>
    );
}
