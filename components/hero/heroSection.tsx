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
        <div className='relative z-10 p-4  mx-auto text-center '>
            <div className='relative z-10 mx-auto'>
                <div className='bg-gradient-to-r from-black via-transparent to-black'>
                    <div className='bg-white p-4 text-center max-w-full mx-auto'>
                        {' '}
                        {/* <div
                className='w-full absolute overflow-hidden opacity-50'
                style={{
                    backgroundColor: color,
                    height: '100%',
                    clipPath: 'ellipse(70% 100% at 50% 100%)',
                }}></div> */}
                        {/* <div
                className='w-full relative overflow-hidden'
                style={{
                    backgroundColor: color,
                    height: '100%',
                    clipPath: 'ellipse(70% 90% at 50% 100%)',
                }}>
                    </div> */}
                        <section
                            className={`flex flex-col py-5 px-5  items-center min-w-[375px] max-w-[1132px] mx-auto text-${textColor}`}>
                            {content}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
