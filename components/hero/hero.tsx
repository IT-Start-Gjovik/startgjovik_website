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
        <div
            className='h-screen'
            style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${imageSrc})`,
                backdropFilter: 'blur(10px)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                width: '100%',
            }}>
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
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
                <HeroSection
                    color={color}
                    textColor={textColor || 'white'}
                    content={content}
                />
            </div>
        </div>
    );
}
