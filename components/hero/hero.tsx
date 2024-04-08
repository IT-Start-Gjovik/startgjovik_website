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
                className='h-screen w-full flex flex-col justify-center items-center'
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.22), rgba(0, 0, 0, 0.2)), url(${imageSrc})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    width: '100%',
                }}>
                <div
                    className={`flex flex-col items-center justify-center z-50 min-w-[375px] ${
                        logo ? 'pb-0' : 'pb-32'
                    } px-10`}>
                    <HeroTitle title={title} hasLogo={logo} />
                    {logo && (
                        <div className='flex justify-center z-20'>
                            <Logo />
                        </div>
                    )}
                </div>
            </div>
            {/* HERO CONTENT BACKGROUND IMAGE (WHITE/DARKBLUE)             */}
            <div className='h-full -mt-28 relative flex flex-col justify-center items-center bg-contain bg-no-repeat'>
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
