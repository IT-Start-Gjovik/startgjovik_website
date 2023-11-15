'use client';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function CarbonFootprint() {
    return (
        <section>
            <h2 className='text-3xl md:text-5xl md:text-center font-semibold'>Carbon Footprint</h2>
            <div className='mt-5 flex flex-col md:flex-row gap-10'>
                <article className='bg-slate-900 hover:scale-110 hover:my-1 duration-700 p-5 rounded-lg shadow-2xl shadow-slate-700'>
                    <p className='text-[16.5px] '>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum magna erat, at accumsan est finibus quis. Fusce dapibus viverra
                        arcu, vel mollis purus commodo nec. Phasellus nulla nulla, accumsan ac massa quis, tempor sollicitudin elit. Suspendisse facilisis risus
                    </p>
                </article>
                <div className='min-w-fit'>
                    <WebsiteCarbonBadge dark={true} url='https://www.startgjovik.no/' />
                </div>
            </div>
        </section>
    );
}
