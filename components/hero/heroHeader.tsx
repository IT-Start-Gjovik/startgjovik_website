export default function HeroHeader({ header }: { header: string }) {
    return (
        <h2
            className={`text-2xl mt-10 md:text-3xl font-medium pt-5 px-5 md:px-0 text-start self-start mb-2 `}>
            {header}
        </h2>
    );
}
