"use client";
import BackButton from '@/components/UI/backbutton';
import Logo from '@/components/UI/logo';
import Footer from '@/components/footer/footer';
import Hero from '@/components/heroSection/hero';
import { useEffect, useState } from 'react';
import Image from 'next/image';


export default function AboutUsPage() {
    return (
        <main className='bg-gray-900 min-h-screen'>
            <Logo />
            <div className='bg-white'>
                <div className='container flex flex-wrap mx-auto max-w-7xl sm:px-6 lg:px-8 justify-around text-center'>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 sm:px-6 '>
                        {/* svg */}
                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 sm:px-6'>
                        {/* svg */}

                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 sm:px-6'>
                        {/* svg */}

                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                 
                 {/*Bildet vises ikke*/}
                 {/*   <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3 p-5 sm:px-6'>
                      
                        <h1 className='text-slate-900 font-medium'>What is Lorem Ipsum?</h1>
                        <p className='mt-4 text-lg leading-10 text-slate-900 '>
                            <Image src='/images/startgjøvik.jpg' alt='ntnu' width={700} height={475} />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    */}

                </div>
            </div>

            <div>
                <Hero />
            </div>

            <div className='fixed top-0 right-0 m-4'>
                <BackButton link='/' text='Tilbake til hovedsiden' />
            </div>
            <footer className='w-full fixed bottom-0 '>
                <Footer />
            </footer>
        </main>
    );
}
