'use client';
import BackButton from '@/components/UI/backbutton';
import Logo from '@/components/UI/logo';
import Footer from '@/components/footer/footer';
import Hero from '@/components/heroSection/hero';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styre from '@/backend/schemas/styre';
import { getStyreMedlemmer } from '@/backend/sanity-utils';
import { StyreType } from '@/types/StyreType';
import { EventCardType } from '@/types/EventCardType';
import Header from '@/components/header/page';


export default async function AboutUsPage() {
    const styre = await getStyreMedlemmer();
    return (
        <main className='bg-gray-900 min-h-screen'>
            <Header />
            <Logo />
            <div className='bg-white'>
                <div className='container flex flex-wrap mx-auto max-w-7xl sm:px-6 lg:px-8 justify-around text-center'>
                    <div className='w-full lg:w-1/2 xl:w-1/3 p-20 sm:px-6'>
                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2 xl:w-1/3 p-20 sm:px-6'>
                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2 xl:w-1/3 p-20 sm:px-6'>
                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy
                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <section className='bg-gray-900'>
                <div className='container mx-auto max-w-7xl p-6 lg:p-8'>
                    <h1 className='text-7xl font-extrabold'>
                        Sttyre <span className='bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text'>Medlemmer</span>
                    </h1>
                    <div className='grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-1 gap-20 mt-12'>
                        {styre.map((styre:StyreType) => (
                            <div key={styre._id} className='p-5 sm:px-6'>
                                {styre.image && (
                                    <img src={styre.image} alt={styre.alt} className='w-40 h-40 object-cover rounded-full border border-slate-900 mx-auto' />
                                )}
                                <h1 className='mt-4 text-xl font-semibold text-center bg-gradient-to-r from-blue-400 to-white text-transparent bg-clip-text '>
                                    {styre.title} - {styre.stilling}
                                </h1>
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
            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake' />
            </div>
            <footer className='w-full fixed bottom-0 '>
                <Footer />
            </footer>
        </main>
    );
}
