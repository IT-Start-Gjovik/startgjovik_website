import { fetchImageByCategory, getEventCards } from '@/backend/sanity-utils';
import EventSection from '@/components/eventSection/eventSection';
import Hero from '@/components/hero/hero';
import HomeHeroContent from '@/components/home/homeHeroContent';
import MiddleSection from '@/components/middleSection/middleSection';
import SustainabilitySection from '@/components/sustainability/sustainabilitySection';
import { ImageCategory } from '@/enums/EImageCategory';

const homePageProps = {
    title: 'VELKOMMEN TIL',
    color: '#132D4E',
    textColor: 'white',
    logo: true,
    content: <HomeHeroContent />,
    contentBackground: '/images/hero-background-upsidedown-blue.png',
};

export default async function Home() {
    const homePic = await fetchImageByCategory(ImageCategory.HOME_PIC as 'HOME_PIC');
    const events = await getEventCards();

    return (
        <div className='flex flex-col overflow-y-auto min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            {/** Header */}
            <main className='min-h-screen'>
                <Hero {...homePageProps} imageSrc={homePic?.asset.url || ''} />
                {/**List of events */}
                <EventSection events={events}></EventSection>

                {/** Middle Section */}
                <MiddleSection />

                {/** Sustainability */}
                <SustainabilitySection />
            </main>
        </div>
    );
}
