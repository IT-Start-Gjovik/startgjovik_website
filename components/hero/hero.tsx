import Image from 'next/image';
import Logo from '../UI/logo';
import HeroSection from './heroSection';

interface HeroProps {
    color: string;
    imageSrc: string;
    title: string;
    logo: boolean;
    textColor?: string;
    content: React.ReactNode;
}

export default function Hero({
    title,
    color,
    imageSrc,
    logo,
    content,
    textColor,
}: HeroProps) {
    return (
        <div className='relative'>
            <div className='w-full bottom-0 sm:h-[140vh] h-[120vh]'>
                <Image
                    src={imageSrc}
                    alt=''
                    className='bg-bg-primary-dark opacity-60 object-cover'
                    fill
                />
                <div className='flex flex-col items-center justify-center pt-40 md:pt-54 px-10'>
                    <h2
                        className={`font-bold text-center ${
                            logo
                                ? 'text-[32px] md:text-[52px]'
                                : 'text-[52px] md:text-[120px]'
                        } z-20`}>
                        {title}
                    </h2>
                    {logo && (
                        <div className='flex justify-center  z-20'>
                            <Logo />
                        </div>
                    )}
                </div>
                <HeroSection
                    color={color}
                    textColor={textColor || 'white'}
                    content={content}
                />
            </div>
        </div>
    );
}
