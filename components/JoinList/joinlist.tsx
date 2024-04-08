'use client';

import { getVervs } from '@/backend/sanity-utils';
import { VervType } from '@/types/Verv';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingPage from '../loadingPage/loadingPage';
import JoinListElement from './joinlistelement';

export default function JoinList() {
    const [vervs, setVervs] = useState<VervType[]>();
    const router = useRouter();

    useEffect(() => {
        if (!vervs) {
            getVervs()
                .then((data) => {
                    setVervs(data);
                })
                .catch((error) => {
                    router.push('/feilside');
                });
        }
    }, [vervs, router]);

    if (!vervs) {
        return <LoadingPage />;
    }

    return (
        <div className='w-full max-w-sm p-4 border rounded-lg shadow sm:p-6 bg-white text-black border-gray-700'>
            <h5 className='mb-3 text-base font-semibold md:text-xl '>
                Send en søknad!
            </h5>

            <p className='text-sm font-normal text-gray-800'>
                Våre avdelinger trenger engasjerte studenter til å forme Start
                Gjøvik. Her er en liste med alle avdelinger som er åpne for nye
                studenter! <br /> <br />
                Klikk på linkene under for å søke! ✍
            </p>

            <ul className='my-4 space-y-3'>
                {vervs && vervs.length > 0 ? (
                    vervs.map((verv) => (
                        <JoinListElement
                            key={verv._id}
                            formUrl={verv.url}
                            status={verv.type as number}
                            title={verv.title}
                        />
                    ))
                ) : (
                    <h4>Ingen Verv Ute!</h4>
                )}
            </ul>
            <div>
                <a
                    href='mailto:hr@startgjovik.no'
                    className='inline-flex items-center text-xs font-normal hover:underline text-gray-800'>
                    <svg
                        className='w-3 h-3 mr-2'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'>
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                        />
                    </svg>
                    Ønsker du å bli med, men usikker på avdeling? <br />
                    Send en åpen søknad til HR (hr@startgjovik.no)!
                </a>
            </div>
        </div>
    );
}

