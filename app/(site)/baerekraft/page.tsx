import Footer from '@/components/footer/footer';
import CarbonFootprint from '@/components/sustainability/carbonFootprint/carbonFootprint';
import SustainabilityMain from '@/components/sustainability/sustainabilityMain';

export default function BaerekraftPage() {
    return (
        <div className='bg-gray-900'>
            <main className='mx-auto my-0 max-w-4xl px-4 transition-all md:px-8  min-h-screen'>
                <SustainabilityMain />
                <CarbonFootprint />
            </main>
            <Footer />
        </div>
    );
}
