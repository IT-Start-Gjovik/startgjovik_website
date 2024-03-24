export default function HeroHeader({ header }: { header: string }) {
    return (
        <h2
            className={`text-2xl md:text-3xl font-medium pt-5 text-start self-start mb-2 `}>
            {header}
        </h2>
    );
}
