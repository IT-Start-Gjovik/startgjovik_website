import ListIcon from '@/components/listIcon/listIcon';
import { InboxIcon, MapIcon, PhoneIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic';
import Spinner from '@/components/UI/Spinner';

const Map = dynamic(() => import('@/components/map/map'), { ssr: false, loading: () => <Spinner /> });
export default function ForCompanyMap() { 
    return (
        <>
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
        </>
    );
}