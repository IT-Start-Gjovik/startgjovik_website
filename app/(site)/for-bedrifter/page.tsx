"use client";
import Spinner from '@/components/UI/Spinner';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import { InboxIcon, MapIcon, PhoneIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Map = dynamic(() => import('@/components/map/map'), { ssr: false, loading: () => <Spinner/> });
export default function ForCompany() {
    return (
        <div className='bg-gray-900 min-w-screen-xl mx-auto'>
            <Header />
            <main className='bg-gray-900 min-h-screen' >
            <h1 className=' mb-7 text-5xl md:text-7xl text-center font-bold'>For bedrifter</h1>

            {/* Introduction */}
            <div className='flex justify-center h-fit'>
                <div className='grid w-4/5 sm:grid-cols-1 xl:grid-cols-2 h-auto p-7 w-[80%] bg-[#0B0C0E] rounded-xl shadow-2xl xl:justify-self-start'>
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
                        <p className='xl:p-4 sm:text-xs xl:text-xl leading-snug overflow-auto text-pretty'>
                            Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å samarbeide med engasjerte studenter fra NTNU Gjøvik. Dette gir dere
                            muligheten til å utvikle nye fremtidige medarbeidere og samarbeidspartnere til deres bedrift eller organisasjon.
                        </p>
                    </article>
                </div>
            </div>

            {/* Event, skills development and networking */}
            {/*<div className='flex flex-col justify-center items-center mb-7 ml-4 mr-4'>
                <div className='grid grid-cols-3 w-[80%] h-96'>
                    <div className='flex flex-col bg-[#0B0C0E] mr-4 rounded-xl shadow-2xl p-4 h-full'>
                        <h2 className='text-2xl text-center font-extrabold mb-7 break-words'>Arrangement</h2>
                        <p className='break-words text-xl'>
                            Vi tilbyr et miljø for å skape innovative ideer gjennom våre workshops, foredrag og andre arrangementer. Her kan dere spille en aktiv
                            rolle i å forme morgendagens innovatører, samtidig som det gir en gyllen anledning for å profilere deres bedrift eller organisasjon, og
                            demonstrere deres engasjement og ekspertise.
                        </p>
                    </div>
                    <div className='flex flex-col bg-[#0B0C0E] mr-4 rounded-xl shadow-2xl p-4 h-full'>
                        <h2 className='text-2xl text-center font-extrabold mb-7 break-words'>Kompetanseutvekslig</h2>
                        <p className='break-words text-xl'>
                            Vi gir dere muligheten til å utvikle deres bedrift eller organisasjon gjennom aktiv kompetanseutveksling med studenter. Dette åpner for en
                            verdifull innsikt fra den neste generasjonen av entreprenører, og gir dere muligheten til å forstå og integrere nye, friske perspektiver i
                            deres virksomhet.
                        </p>
                    </div>
                    <div className='flex flex-col bg-[#0B0C0E] mr-4 rounded-xl shadow-2xl p-4 h-full'>
                        <h2 className='text-2xl text-center font-extrabold mb-7 break-words'>Nettverksbygging</h2>
                        <p className='break-words text-xl'>
                            Ved å bli en del av vårt nettverk, åpner dere dørene til en verden av muligheter, der dere kan knytte kontakter med studenter, akademiske
                            institusjoner, samt en rekke bedrifter og organisasjoner. Denne forbindelsen gir en unik mulighet for vekst og utvikling, idet den sammenfører
                            ulike perspektiver og ekspertise.
                        </p>
                    </div>
                </div>
            </div>

            {/* information 
            <div className='flex justify-center ml-4 mr-4 '>
                <div className='grid grid-cols-2 p-7 2xl:w-[80%] xl:w-[80%] bg-[#0B0C0E] rounded-xl shadow-2xl'>
                    <div className=' rounded-lg w-[90%] justify-self-start '>
                        <h2 className='text-2xl text-center font-extrabold mb-7 break-words'>Kontakt oss</h2>

                        <ul className='flex flex-col gap-[2.75rem] text-xl mt-[4rem] ml-[4rem]'>
                            <li className='inline-flex items-center'>
                                <div className='w-7'>
                                    <PhoneIcon />
                                </div>
                                <p className='ml-3'>988 15 727</p>
                            </li>

                            <li className='inline-flex items-center'>
                                <div className='w-7'>
                                    <InboxIcon />
                                </div>
                                <p className='ml-3'>leder@startgjovik.no</p>
                            </li>

                            <li className='inline-flex items-center'>
                                <div className='w-7'>
                                    <MapIcon />
                                </div>
                                <a href="https://www.google.com/maps/place/Teknologivegen+22,+2815+Gj%C3%B8vik/@60.7896213,10.6814803,18z/data=!4m6!3m5!1s0x4641da14f80b6889:0x1145aeb60303d692!8m2!3d60.7888182!4d10.6808757!16s%2Fg%2F11c5mf4f38?entry=ttu" className='ml-3 hover:underline'>
                                    Teknologivegen 22, Innovatoriet, Gjøvik, Norway
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className=' p-4 rounded-lg w-[90%] h-[30rem] justify-self-end bg-[#1D2432] flex items-center justify-center'>
                        <Map />
                    </div>

                </div>
            </div>*/}

            <Footer />
        </main>
        </div>
    );
}
