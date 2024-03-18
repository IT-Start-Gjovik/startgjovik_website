import ListIcon from '@/components/listIcon/listIcon';
import { InboxIcon, MapIcon, PhoneIcon } from '@heroicons/react/20/solid';
import dynamic from 'next/dynamic';
import Spinner from '@/components/UI/Spinner';

const Map = dynamic(() => import('@/components/map/map'), {
    ssr: false,
    loading: () => <Spinner />,
});
export default function ForCompanyMap() {
    return (
        <div className='bg-white flex flex-col md:flex-row w-full py-2 md:py-14 px-5 items-center gap-5 md:gap-10 justify-center'>
            <article className='text-black'>
                <h2 className='text-[40px] mb-4 font-bold text-center md:text-left'>
                    Kontakt oss
                </h2>
                <ul className='grid xl:text-xl px-10 md:px-0'>
                    <ListIcon icon={<PhoneIcon />} text='988 15 727' />
                    <ListIcon
                        icon={<InboxIcon />}
                        text='leder@startgjovik.no'
                        link='mailto:leder@startgjovik.no'
                    />
                    <ListIcon
                        icon={<MapIcon />}
                        text='Teknologivegen 22, Innovatoriet, Gjøvik'
                        link='https://www.google.com/maps/place/Teknologivegen+22,
                              +2815+Gj%C3%B8vik/@60.7896213,10.6814803,18z/data=!4m6!
                              3m5!1s0x4641da14f80b6889:0x1145aeb60303d692!8m2!3d60.7888182!
                              4d10.6808757!16s%2Fg%2F11c5mf4f38?entry=ttu'
                    />
                </ul>
            </article>
            <div className='p-4 rounded-lg w-[380px] h-[350px] md:w-[500px] md:h-[400px]'>
                <Map />
            </div>
        </div>
    );
}
