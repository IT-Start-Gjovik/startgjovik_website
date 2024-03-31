import Image from 'next/image';
import Logo from '../UI/logo';
import HeroSection from './heroSection';
import HeroTitle from './heroTitle';

interface HeroProps {
    color: string;
    imageSrc: string;
    title: string;
    logo: boolean;
    textColor?: string;
    content: React.ReactNode;
    contentBackground: string;
}

export default function Hero({
    title,
    color,
    imageSrc,
    logo,
    content,
    textColor,
    contentBackground,
}: HeroProps) {
    return (
        <>
            {/* HERO BACKGROUND + LOGO/TITLE  */}
            <div
                className='h-screen w-full'
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.2)), url(${imageSrc})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%',
                }}>
                <div
                    className={`flex flex-col items-center justify-center ${
                        logo ? 'pt-36' : 'pt-20'
                    } z-50 min-w-[375px] px-10`}>
                    <HeroTitle title={title} hasLogo={logo} />
                    {logo && (
                        <div className='flex justify-center z-20'>
                            <Logo />
                        </div>
                    )}
                </div>
            </div>
            {/* HERO CONTENT BACKGROUND IMAGE (WHITE/DARKBLUE)             */}
            <div className='h-screen -mt-28 relative flex flex-col justify-center items-center bg-contain bg-no-repeat'>
                <Image
                    src={contentBackground}
                    layout='fill'
                    alt={''}
                    className='z-[10] '
                />
                <HeroSection
                    color={color}
                    textColor={textColor || 'white'}
                    content={content}
                />
            </div>
        </>
    );
}
