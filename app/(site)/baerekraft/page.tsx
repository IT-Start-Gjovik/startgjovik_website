import Footer from '@/components/footer/footer';
import SustainabilityImageContainer from '@/components/sustainability/sustainabilityGoalsContainer';
import SustainabilityMainText from '@/components/sustainability/sustainabilityMain';
export default function BaerekraftPage() {
    return (
        <div className='bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            <main className='mx-auto my-0 max-w-4xl px-3  min-h-screen'>
                <SustainabilityMainText />
                <SustainabilityImageContainer />
            </main>
            <Footer />
        </div>
    );
}
