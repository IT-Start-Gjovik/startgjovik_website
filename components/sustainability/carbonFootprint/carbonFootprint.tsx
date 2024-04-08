'use client';
import Image from 'next/image';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
export default function CarbonFootprint() {
    return (
        <section className='bg-bg-primary text-black py-5 px-5 md:px-10'>
            <div className='mx-auto max-w-[957px]'>
                <div className='flex flex-row justify-between items-center gap-5'>
                    <h2 className='text-2xl md:text-4xl font-medium '>
                        Carbon Footprint
                    </h2>
                    <Image
                        src='/images/sustainability/co2-foot.png'
                        alt='Carbon footprint'
                        className='object-contain'
                        width={135}
                        height={135}
                    />
                </div>
                <p className='text-lg md:text-xl  py-5'>
                    Vi viser også miljøengasjement gjennom vårt{' '}
                    <a
                        href='https://www.websitecarbon.com/'
                        target='_blank'
                        className='text-blue-400'>
                        Website Carbon Badge
                    </a>{' '}
                    på nettsiden. Dette emblemet indikerer hvor &quot;grønnere&quot;
                    vår side er sammenlignet med andre, takket være våre
                    miljøvennlige valg innen design og hosting av nettsiden. Vi
                    kombinerer teknologi og bærekraft for å gjøre en forskjell, og
                    badge-et vårt er et symbol på dette engasjementet.
                </p>
                <WebsiteCarbonBadge dark={true} url='https://www.startgjovik.no/' />
            </div>
        </section>
    );
}
