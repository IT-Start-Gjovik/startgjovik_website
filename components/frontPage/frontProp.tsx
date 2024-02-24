import Logo from '@/components/UI/logo';

interface FrontPageProps { 
    path: string;
    title: string; 
    alt?: string;
    logo?: boolean;
}

export default function Frontprop({ path, alt, logo, title} : FrontPageProps) {
    return (
        <>
            <div
            className='flex flex-col items-center bg-cover bg-center relative sm:h-[140vh] h-[100vh]'
            style={{
                backgroundImage: `url('${path}')`,
               
            }}>

            <div className='flex flex-col items-center justify-center pt-40 md:pt-60 px-10'>
                <h2 className='font-bold text-[32px] md:text-[52px] text-center'>
                    {title}
                </h2>
                <div className='flex justify-center md:mb-8'>
                    {logo && <Logo />}
                </div>
            </div>

            </div>
        </>
    );
}