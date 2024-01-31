import { getStartBoard } from '@/backend/sanity-utils';
import { StyreType } from '@/types/StyreType';

export async function Startstyre() {
    const styreMedlemer = await getStartBoard();

    return (
        <section className='bg-gray-900'>
            <div className='container mx-auto max-w-7xl p-6 lg:p-8'>
                <h2 className='text-7xl font-extrabold'>
                    Sttyre <span className='bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text'>Medlemmer</span>
                </h2>
                <div className='grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-1 gap-20 mt-12'>
                    {styreMedlemer.map((styre: StyreType) => (
                        <div key={styre._id} className='p-5 sm:px-6'>
                            {styre.image && (
                                <img src={styre.image} alt={styre.alt} className='w-40 h-40 object-cover rounded-full border border-slate-900 mx-auto' />
                            )}
                            <h2 className='mt-4 text-xl font-semibold text-center bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text '>
                                {styre.title} - {styre.stilling}
                            </h2>
                            <p className='text-center mt-2'>
                                LinkedIn -{' '}
                                <a href={styre.url} target='_blank' className='text-blue-300'>
                                    {styre.slug}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
