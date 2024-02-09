'use client';
import Spinner from '@/components/UI/Spinner';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import ListIcon from '@/components/listIcon/listIcon';
import { InboxIcon, MapIcon, PhoneIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Button from '@/components/Button/button';

const Map = dynamic(() => import('@/components/map/map'), { ssr: false, loading: () => <Spinner /> });
export default function ForCompany() {
    return (
        <div className='bg-gray-900 min-w-screen-lg mx-auto'>
            <main className='bg-gray-900 h-full'>
                <Header />
                <h1 className=' mb-7 text-5xl md:text-7xl text-center font-bold'>For bedrifter</h1>

                {/* Introduction */}
                <div className='flex justify-center h-fit mb-3'>
                    <div className='grid w-4/5 sm:grid-cols-1 xl:grid-cols-2 h-auto p-7 shadow-slate-700 bg-slate-900 rounded-xl shadow-2xl xl:justify-self-start'>
                        <div className='flex items-center justify-center rounded-lg relative h-auto'>
                            <Image
                                src='/images/grunder_eksempel.png'
                                height={628} // These sizes will be used for the 'layout="responsive"' setting
                                width={1200}
                                objectFit='contain'
                                className='rounded md:max-w-[35rem] md:h-auto xl:h-auto xl:w-auto' // Adjusted the width to 31.25rem which is equivalent to 500px
                                alt='grunder eksempler'
                            />
                        </div>
                        <article className='xl:p-4 rounded-lg w-full sm:justify-self-center xl:justify-self-end xl:col-span-1 xl:h-auto'>
                            <h2 className='text-2xl xl:ml-10 font-extrabold mb-2'>Hva får du ut av et samarbeid?</h2>
                            <p className='xl:p-4 xl:text-xl leading-snug overflow-auto text-pretty'>
                                Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å samarbeide med engasjerte studenter fra NTNU Gjøvik. Dette gir
                                dere muligheten til å utvikle nye fremtidige medarbeidere og samarbeidspartnere til deres bedrift eller organisasjon.
                            </p>
                            <Button text='Les mer' link='/'/>
                        </article>
                    </div>
                </div>

                {/* Event, skills development and networking */}
                <div className='flex justify-center h-fit mb-3'>
                    <div className='grid w-4/5 gap-3 sm:grid-cols-1 md:grid-cols-3 h-auto'>
                        <article className='flex flex-col items-center justify-center shadow-slate-700 bg-slate-900 rounded-xl p-4'>
                            <h2 className='text-2xl mb-2 font-extrabold'>Arrangement</h2>
                            <p className='xl:p-2 xl:text-xl leading-snug overflow-auto text-pretty'>
                                Vi tilbyr et miljø for å skape innovative ideer gjennom våre workshops, foredrag og andre arrangementer. Her kan dere spille en
                                aktiv rolle i å forme morgendagens innovatører, samtidig som det gir en gyllen anledning for å profilere deres bedrift eller
                                organisasjon, og demonstrere deres engasjement og ekspertise.
                            </p>
                        </article>
                        <article className='flex flex-col items-center justify-center shadow-slate-700 bg-slate-900 rounded-xl p-4'>
                            <h2 className='text-2xl mb-2 font-extrabold'>Kompetanseutvekslig</h2>
                            <p className='xl:p-2 xl:text-xl leading-snug overflow-auto text-pretty'>
                                Vi gir dere muligheten til å utvikle deres bedrift eller organisasjon gjennom aktiv kompetanseutveksling med studenter. Dette
                                åpner for en verdifull innsikt fra den neste generasjonen av entreprenører, og gir dere muligheten til å forstå og integrere
                                nye, friske perspektiver i deres virksomhet.
                            </p>
                        </article>
                        <article className='flex flex-col items-center justify-center shadow-slate-700 bg-slate-900 rounded-xl p-4'>
                            <h2 className='text-2xl mb-2 font-extrabold'>Nettverksbygging</h2>
                            <p className='xl:p-2 xl:text-xl leading-snug overflow-auto text-pretty'>
                                Ved å bli en del av vårt nettverk, åpner dere dørene til en verden av muligheter, der dere kan knytte kontakter med studenter,
                                akademiske institusjoner, samt en rekke bedrifter og organisasjoner. Denne forbindelsen gir en unik mulighet for vekst og
                                utvikling, idet den sammenfører ulike perspektiver og ekspertise.
                            </p>
                        </article>
                    </div>
                </div>

                {/* information */}
                <div className='flex justify-center h-fit mb-3 mt-5'>
                    <div className='grid h-auto sm:grid-cols-1 md:grid-cols-2 w-4/5 shadow-slate-700 bg-slate-900 rounded-xl shadow-2xl'>
                        <div className=' rounded-lg w-[90%] justify-self-center  '>
                            <article className='shadow-slate-700 bg-slate-900 rounded-xl p-2'>
                                <h2 className='text-2xl mb-4 font-extrabold text-center'>Kontakt oss</h2>
                                <ul className='grid grid-cols-1 xl:text-xl place-content-end md:gap-4 md:mt-[4rem] md:ml-[4rem]'>
                                    <ListIcon icon={<PhoneIcon />} text='988 15 727' />
                                    <ListIcon icon={<InboxIcon />} text='leder@startgjovik.no' />
                                    <ListIcon
                                        icon={<MapIcon />}
                                        text='Teknologivegen 22, Innovatoriet, Gjøvik, Norway'
                                        link='https://www.google.com/maps/place/Teknologivegen+22,+2815+Gj%C3%B8vik/@60.7896213,10.6814803,18z/data=!4m6!3m5!1s0x4641da14f80b6889:0x1145aeb60303d692!8m2!3d60.7888182!4d10.6808757!16s%2Fg%2F11c5mf4f38?entry=ttu'
                                    />
                                </ul>
                            </article>
                        </div>
                        <div className='p-4 rounded-lg w-[90%] h-[20rem] sm:h-[20rem] md:h-[30rem] bg-[#1D2432] flex items-center justify-self-center mb-4 mt-4'>
                            <Map />
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}
