'use client';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function CarbonFootprint() {
    return (
        <section>
            <h2 className='text-3xl md:text-5xl md:text-center font-semibold'>Carbon Footprint</h2>
            <div className='mt-5 flex  flex-col md:flex-row gap-10 items-center'>
                <article className='bg-slate-900 hover:scale-105 hover:my-1 duration-1000 p-5 rounded-lg shadow-2xl shadow-slate-700'>
                    <p className='text-[16.5px] '>
                        Vi viser også miljøengasjement gjennom vårt{' '}
                        <a href='https://www.websitecarbon.com/' target='_blank' className='text-blue-400'>
                            Website Carbon Badge
                        </a>{' '}
                        på nettsiden. Dette emblemet indikerer hvor &quot;grønnere&quot; vår side er sammenlignet med andre, takket være våre miljøvennlige valg
                        innen design og hosting av nettsiden. Vi kombinerer teknologi og bærekraft for å gjøre en forskjell, og badge-et vårt er et symbol på
                        dette engasjementet.
                    </p>
                </article>
                <div className='min-w-fit'>
                    <WebsiteCarbonBadge dark={true} url='https://www.startgjovik.no/' />
                </div>
            </div>
        </section>
    );
}
