import { getStartBoard } from '@/backend/sanity-utils';
import { MemberTypes } from '@/types/memberTypes';
import Image from 'next/image';

export async function StartMembers() {
    const BoardMembers = await getStartBoard();

    return (
        <section className='bg-gray-900'>
            <div className='container mx-auto max-w-7xl p-6 lg:p-8'>
                <h2 className='text-7xl font-extrabold text-blue-400'>
                    Styre <span className='bg-gradient-to-r from-blue-900 to-white text-transparent bg-clip-text'>Medlemmer</span>
                </h2>
                <div className='grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-1 gap-20 mt-12'>
                    {BoardMembers.map((Board: MemberTypes) => (
                        <div key={Board._id} className='p-5 sm:px-6'>
                            {Board.image && (
                                <Image
                                    src={Board.image}
                                    alt={Board.alt || 'undefined'}
                                    width={500}
                                    height={500}
                                    className='w-40 h-40 object-cover rounded-full border border-slate-900 mx-auto'
                                />
                            )}
                            <h2 className='mt-4 text-xl font-semibold text-center bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text '>
                                {Board.title} - {Board.stilling}
                            </h2>
                            <p className='text-center mt-2 text-blue-400'>
                                LinkedIn -{' '}
                                <a href={Board.url} target='_blank' className='text-blue-400'>
                                    {Board.slug}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
