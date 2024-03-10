'use client';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import ForCompanyHero from '@/components/for-company/forCompanyHero';
import ForCompanyInfo from '@/components/for-company/forCompanyInfo';
import ForCompanyMap from '@/components/for-company/forCompanyMap';
import Hero from '@/components/hero/hero';

const forCompanyProps = {
    title: 'For bedrifter',
    color: 'white',
    textColor: 'black',
    imageSrc: '/images/for-company/Front.png',
    logo: false,
    content: <ForCompanyHero />,
}

export default function ForCompany() {
    return (
        <div className='min-w-screen-lg mx-auto bg-[#132D4E]'> 
            <Header />
            <main>
                <Hero {...forCompanyProps} />
                <ForCompanyInfo />
                {/* <ForCompanyMap /> */}
            </main>
            <Footer />
        </div>
    );
}
