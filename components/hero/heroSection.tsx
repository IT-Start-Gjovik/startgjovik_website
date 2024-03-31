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
        <section
            className={`flex flex-col  justify-center items-center z-[200]  bottom-0  left-0 right-0 absolute pb-5 px-8  min-w-[375px] max-w-[1132px] mx-auto text-${textColor}`}>
            {content}
        </section>
    );
}
