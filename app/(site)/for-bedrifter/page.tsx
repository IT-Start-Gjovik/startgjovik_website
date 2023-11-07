import Footer from '@/components/footer/footer';
import Image from 'next/image';

export default function ForCompany() {
    return (
        <div className="bg-gray-900 min-h-screen">
        <main>
            <h1 className="ml-4 mb-4 text-7xl font-extrabold leading-none leading-snug text-center">For bedrifter</h1>



            {/* Introduction */}
            <div className='flex justify-center mb-5'>
                <div className='grid grid-cols-2 p-7 w-[80%] bg-[#0B0C0E] rounded-xl shadow-2xl'>
                    <div className=' rounded-lg relative'>
                        <Image 
                         src="/images/grunder_eksempel.png"
                         layout='fill'
                         objectFit='cover'
                         className='rounded'
                         alt="grunder eksempler" 
                        />
                    </div> 
                    <div className=' p-4 rounded-lg w-[90%] justify-self-end'>
                        <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            {/* Event, skills development and networking */}
            <div className='flex justify-center mb-5'>
                <div className='grid grid-cols-3 w-[80%]'>
                    <div className='bg-[#0B0C0E] mr-4 rounded-xl shadow-2xl p-4'>
                        <h2 className='text-3xl text-center font-extrabold mb-1'>arrangement</h2>
                        <p className='text-l'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='bg-[#0B0C0E] mr-4 rounded-xl shadow-2xl p-4'>
                        <h2 className='text-3xl text-center font-extrabold mb-1'>Kompetanseutvekslig</h2>
                        <p className='text-l'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='bg-[#0B0C0E] rounded-xl shadow-2xl p-4'>
                        <h2 className='text-3xl text-center font-extrabold mb-1'>Nettverksbygging</h2>
                        <p className='text-l'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>

            {/* information */}
            <div className='flex justify-center'>
                <div className='grid grid-cols-2 p-7 w-[80%] bg-[#0B0C0E] rounded-xl shadow-2xl'>
                    <div className=' rounded-lg w-[90%] justify-self-start'>
                        <p className='text-xl'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div> 
                    <div className=' p-4 rounded-lg w-[90%] justify-self-end'>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
        </div>
    )
}