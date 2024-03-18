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
    console.log('HeroSectionProps:', color, textColor, content);
    return (
        <div className='relative z-10 text-center w-full bottom-0 h-full '>
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
                    className={`flex flex-col py-20 pb-5 px-8 items-center min-w-[375px] max-w-[1132px] mx-auto text-${textColor}`}>
                    {content}
                </section>
            </div>
        </div>
    );
}
