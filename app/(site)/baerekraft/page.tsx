import Footer from '@/components/footer/footer';
import SustainabilityMain from '@/components/sustainability/sustainabilityMain';
import CarbonFootprintText from '@/components/sustainability/carbonFootprint/carbonFootprintText';
export default function BaerekraftPage() {
    return (
        <div className='bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            <main className='mx-auto my-0 max-w-4xl px-3  min-h-screen'>
                <SustainabilityMain />
                <CarbonFootprintText />
            </main>
            <Footer />
        </div>
    );
}
