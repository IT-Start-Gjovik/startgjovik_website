export default function HeroTitle({
    title,
    hasLogo,
}: {
    title: string;
    hasLogo: boolean;
}) {
    return (
        <h2
            className={`font-semibold text-center text-slate-50 ${
                hasLogo
                    ? 'text-[25px] md:text-[40px]'
                    : 'text-[40px] md:text-[100px]'
            } z-20`}>
            {title}
        </h2>
    );
}
