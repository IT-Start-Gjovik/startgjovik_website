'use client';
import Hero from '@/components/hero/hero';
import CarbonFootprint from '@/components/sustainability/carbonFootprint/carbonFootprint';
import SustainabilityGoalsContainer from '@/components/sustainability/sustainabilityGoalsContainer';
import SustainabilityHeroContent from '@/components/sustainability/sustainabilityHeroContent';
const sustainabilityHeroProps = {
    title: 'Bærekraft',
    color: 'white',
    textColor: 'black',
    imageSrc: '/images/sustainability/sustainability-hero.jpg',
    contentBackground: '/images/hero-background-white.png',
    logo: false,
    content: <SustainabilityHeroContent />,
};

export default function BaerekraftPage() {
    return (
        <main>
            <Hero {...sustainabilityHeroProps} />
            <SustainabilityGoalsContainer />
            <CarbonFootprint />
        </main>
    );
}
