import Logo from '@/components/UI/logo';
import Image from 'next/image';
interface FrontPageProps { 
    path: string;
    title: string; 
    color: string;
    logo?: boolean;
}

export default function Frontprop({ path, logo, title, color} : FrontPageProps) {
    return (
        <>
            <div className='flex flex-col items-center bg-cover bg-center relative sm:h-[140vh] h-[120vh]'>
                <Image src={path} alt='' className='bg-[#132D4E] opacity-70' fill />
                <div className='flex flex-col items-center justify-center pt-40 md:pt-60 px-10'>
                    <h2 className='font-bold text-[32px] md:text-[52px] text-center z-20'>
                        {title}
                    </h2>
                    <div className='flex justify-center md:mb-8 z-20'>
                        {logo && <Logo />}
                    </div>
                    
                </div>
                <div
                    className='w-full absolute bottom-0'
                    style={{
                        height: '35%',
                    }}>
                    <div
                        className='text-center w-full absolute overflow-hidden opacity-50'
                        style={{
                            backgroundColor: color,
                            height: '100%',
                            clipPath: 'ellipse(70% 100% at 50% 100%)',
                        }}></div>

                    <div
                        className='text-center w-full flex flex-col justify-center items-center relative overflow-hidden'
                        style={{
                            backgroundColor: color,
                            height: '100%',
                            clipPath: 'ellipse(70% 90% at 50% 100%)',
                        }}>
                    </div>
                </div>
            </div>
        </>
    );
}