import { getStartBoard } from '@/backend/sanity-utils';
import { MemberType } from '@/types/memberTypes';
import Image from 'next/legacy/image';
import Link from 'next/link';
export default async function BoardMembers() {
    const boardMembers = await getStartBoard();

const groupedMembers = boardMembers.reduce(
    (groups: Record<string, MemberType[]>, member: MemberType) => {
        const stilling = member.stilling.trim();

        if (!groups[stilling]) {
            groups[stilling] = [];
        }

        groups[stilling].push(member);

        return groups;member
    },
    {}
);             



    return (
        <section className='bg-[#132D4E] pb-20'>
            <div className='p-6 lg:p-8 flex flex-col items-center'>
                <h2 className='py-9 text-4xl md:text-5xl lg:text-6xl text-center font-bold'>
                    Styremedlemmer
                </h2>

                                 
               

<div className="w-full max-w-3xl">
    {Object.entries(groupedMembers)
        .sort(([a], [b]) => {
            const order: Record<string, number> = {
                'Leder': 1,
                'Nestleder': 2,
                'HR': 3,
                'IT-ansvarlig': 4,
            };

            return (order[a] || 99) - (order[b] || 99);
        })
        .map(([stilling, members]) => (
            <details
                key={stilling}
                className="mb-4 overflow-hidden rounded-xl border border-gray-600 bg-gray-900"
            >
                <summary className="cursor-pointer px-6 py-5 text-xl font-semibold text-white">
                    {stilling}
                </summary>

                <div className="px-6">
                    {members.map((member) => (
                        <div
                            key={member._id}
                            className="flex items-center gap-8 border-t border-gray-700 py-8"
                        >
                            <Image
                                src={member.image}
                                alt={member._id}
                                width={220}
                                height={220}
                                className="h-52 w-52 shrink-0 rounded-full object-cover"
                            />

                            <div className="flex flex-col">
                                <h3 className="text-2xl font-semibold text-white">
                                    {member.title}
                                </h3>

                                <p className="mt-1 text-lg text-gray-400">
                                    {member.stilling}
                                </p>

                                <Link
                                    href={`mailto:${member.email}`}
                                    className="mt-2 text-md text-gray-300 hover:underline"
                                >
                                    {member.email}
                                </Link>

                                {member.url && (
                                    <Link
                                        href={member.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center text-bg-primary hover:underline"
                                    >
                                        LinkedIn

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="ml-1 size-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                            />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </details>
        ))}
</div>

               
            </div>
        </section>
    );
}
