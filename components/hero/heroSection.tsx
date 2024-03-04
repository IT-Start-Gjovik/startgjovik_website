interface HeroSectionProps {
    color: string;
    textColor: string;
    content: React.ReactNode;
}

export default function HeroSection({
    color,
    textColor,
    content,
}: HeroSectionProps) {
    return (
        <div className='w-full absolute bottom-0 h-min text-black min-w-[375px]'>
            <div
                className='w-full absolute overflow-hidden opacity-50'
                style={{
                    backgroundColor: color,
                    height: '100%',
                    clipPath: 'ellipse(70% 100% at 50% 100%)',
                }}></div>
            <div
                className='w-full relative overflow-hidden'
                style={{
                    backgroundColor: color,
                    height: '100%',
                    clipPath: 'ellipse(70% 90% at 50% 100%)',
                }}>
                <section
                    className={`flex flex-col items-center min-w-[375px] max-w-[1132px] mx-auto lg:mt-[150px] mt-[110px] py-10 px-10 text-${textColor}`}>
                    {content}
                </section>
            </div>
        </div>
    );
}
