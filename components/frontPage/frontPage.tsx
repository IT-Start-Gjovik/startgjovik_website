import Logo from '@/components/UI/logo';
import Button from '@/components/Button/button';

export default function FrontPage() {
    return (
        <div
            className='flex flex-col items-center bg-cover bg-center relative'
            style={{
                backgroundImage: `url('/images/start_casebreaker.png')`,
                height: '100vh',
            }}>
            <div className='flex flex-col items-center justify-center pt-40 md:pt-60 px-10'>
                <h2 className='font-bold text-[32px] md:text-[52px] text-center'>
                    VELKOMMEN TIL
                </h2>
                <div className='flex justify-center md:mb-8'>
                    <Logo />
                </div>
            </div>

            <div
                className='w-full absolute bottom-0'
                style={{
                    height: '35%',
                }}>
                <div
                    className='bg-[#132D4E] text-center w-full absolute overflow-hidden opacity-50'
                    style={{
                        height: '100%',
                        clipPath: 'ellipse(70% 100% at 50% 100%)',
                    }}></div>

                <div
                    className='bg-[#132D4E] text-center w-full flex flex-col justify-end items-center relative overflow-hidden'
                    style={{
                        height: '100%',
                        clipPath: 'ellipse(70% 90% at 50% 100%)',
                    }}>
                    <div className='flex flex-col items-center justify-center pb-8 md:pb-26 md:mb-8 lg:pb-28'>
                        <p className='text-[18px] md:text-[28px]'>
                            En studentorganisasjon med lidenskap for entreprenørskap
                            og bærekraftig utvikling
                        </p>
                        <Button text='LES MER OM OSS' link='/om-oss' />
                    </div>
                </div>
            </div>
        </div>
    );
}
