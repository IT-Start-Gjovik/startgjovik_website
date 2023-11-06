'use client';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

export default function CarbonFootprintText() {
    return (
        <section className='flex flex-col items-center justify-center mt-5'>
            <h2 className='text-3xl md:text-5xl text-center'>Carbon Footprint</h2>
            <div className='mt-5 flex'>
                <article className=''>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum magna erat, at accumsan est finibus quis. Fusce dapibus viverra
                        arcu, vel mollis purus commodo nec. Phasellus nulla nulla, accumsan ac massa quis, tempor sollicitudin elit. Suspendisse facilisis risus
                    </p>
                </article>
                <div className='flex-1'>
                    <WebsiteCarbonBadge co2='0.10' percentage='90' />
                </div>
            </div>
        </section>
    );
}
