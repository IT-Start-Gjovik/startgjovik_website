import Footer from '@/components/footer/footer';
import SustainabilityMain from '@/components/jumbotron/sustainabilityMain';
export default function BaerekraftPage() {
    return (
        <div className='flex flex-col min-h-screen bg-gradient-to-tl from-gradient-end via-gradient-mid to-gradient-start'>
            <main className='flex justify-center min-h-screen'>
                <SustainabilityMain />
            </main>
            <Footer />
        </div>
    );
}
