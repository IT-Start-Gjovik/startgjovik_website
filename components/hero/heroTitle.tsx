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
                    ? 'text-[32px] md:text-[52px]'
                    : 'text-[52px] md:text-[120px]'
            } z-20`}>
            {title}
        </h2>
    );
}
