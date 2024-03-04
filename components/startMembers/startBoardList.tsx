import { getStartBoard } from '@/backend/sanity-utils';
import { MemberTypes } from '@/types/memberTypes';
import Image from 'next/image';
import Logo from '../UI/logo';

export async function StartMembers() {
    const boardMembers = await getStartBoard();

    return (
        <section className='bg-[#132D4E] pb-20'>
            <div className='container mx-auto max-w-7xl p-6 lg:p-8'>
                <h2 className='py-9 text-4xl md:text-5xl lg:text-6xl text-center font-bold text-[#B2C51F]'>
                    Styremedlemmer
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                    {boardMembers.map((member: MemberTypes) => (
                        <article
                            key={member._id}
                            className='bg-white shadow-md rounded-lg overflow-hidden'>
                            <div className='p-5'>
                                {/* Replace with actual Image component once images are available */}
                                <div className='w-full h-48 bg-gray-200 flex items-center justify-center'>
                                    <span className='text-lg text-gray-500'>
                                        Image Placeholder
                                    </span>
                                </div>
                                <h3 className='mt-4 text-xl font-semibold text-center text-[#132D4E]'>
                                    {member.title} - {member.stilling}
                                </h3>
                                <p className='text-center mt-2 text-[#132D4E]'>
                                    LinkedIn -{' '}
                                    <a
                                        href={member.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-[#B2C51F] hover:underline'>
                                        Besøk Profil
                                    </a>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
