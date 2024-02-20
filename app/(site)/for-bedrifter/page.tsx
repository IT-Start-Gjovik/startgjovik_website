'use client';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import ForCompanyHero from '@/components/for-company/forCompanyHero';
import ForCompanyInfo from '@/components/for-company/forCompanyInfo';
import ForCompanyMap from '@/components/for-company/forCompanyMap';


export default function ForCompany() {
    return (
        <div className='min-w-screen-lg mx-auto'> 
        <Header />
        <main>
            <ForCompanyHero />
            <ForCompanyInfo />
            <ForCompanyMap />
            <Footer />
        </main>
        </div>
    );
}
