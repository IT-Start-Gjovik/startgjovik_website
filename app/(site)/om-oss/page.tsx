import AboutHeroContent from '@/components/aboutStart/aboutHeroContent';
import { AboutStart } from '@/components/aboutStart/aboutstartText';
import Hero from '@/components/hero/hero';
import { StartMembers } from '@/components/startMembers/startBoardList';

const aboutHeroProps = {
    title: 'Om oss',
    color: '#132D4E',
    textColor: '#',
    imageSrc: '/images/events/BCM.png',
    logo: false,
    content: <AboutHeroContent />,
    contentBackground: '/images/hero-background-white.png',
};

export default function AboutUsPage() {
    return (
        <main className='bg-gray-900 min-h-screen text-white'>
            <Hero {...aboutHeroProps} />
            <AboutStart />
            <StartMembers />
        </main>
    );
}
