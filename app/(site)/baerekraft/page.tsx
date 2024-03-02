'use client';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import Hero from '@/components/hero/hero';
import CarbonFootprint from '@/components/sustainability/carbonFootprint/carbonFootprint';
import SustainabilityGoal from '@/components/sustainability/sustainabilityGoal';
import SustainabilityGoalsContainer from '@/components/sustainability/sustainabilityGoalsContainer';
import SustainabilityHeroContent from '@/components/sustainability/sustainabilityHeroContent';

const sustainabilityHeroProps = {
    title: 'Bærekraft',
    color: 'white',
    textColor: 'black',
    imageSrc: '/images/sustainability/sustainability-hero.jpg',
    logo: false,
    content: <SustainabilityHeroContent />,
};

export default function BaerekraftPage() {
    return (
        <div className='flex flex-col overflow-y-auto min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            <Header />
            <main className='min-h-screen'>
                <Hero {...sustainabilityHeroProps} />
                <SustainabilityGoalsContainer />
                <CarbonFootprint />
            </main>
            <Footer />
        </div>
    );
}
