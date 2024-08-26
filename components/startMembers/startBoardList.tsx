import { getStartBoard } from '@/backend/sanity-utils';
import { MemberTypes } from '@/types/memberTypes';
import Image from 'next/image';
import Link from 'next/link';
export default async function BoardMembers() {
    const boardMembers = await getStartBoard().then((res) => {
        console.log(res);
        return res;
    });

    return (
        <section className='bg-[#132D4E] pb-20'>
            <div className='p-6 lg:p-8 flex flex-col items-center'>
                <h2 className='py-9 text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
                    Styremedlemmer
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 mt-8'>
                    {boardMembers &&
                        boardMembers.map((member: MemberTypes) => (
                            <article key={member._id} className=' flex  flex-col'>
                                <Image
                                    src={member.image}
                                    alt={member._id}
                                    width={300}
                                    height={200}
                                />
                                <div className='text-start'>
                                    <h3 className='mt-4 text-xl font-semibold text-white'>
                                        {member.title}
                                    </h3>
                                    <p className='text-md text-gray-400'>
                                        {member.stilling}
                                    </p>
                                    <Link
                                        href={member.url}
                                        target='_blank'
                                        className='text-[#B2C51F] hover:underline '>
                                        Linkedin profil
                                    </Link>
                                </div>
                            </article>
                        ))}
                </div>
            </div>
        </section>
    );
}
