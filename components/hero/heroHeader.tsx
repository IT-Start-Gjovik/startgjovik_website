export default function HeroHeader({ header }: { header: string }) {
    return (
        <h2
            className={`text-xl mt-10 md:text-2xl font-medium pt-5 px-5 md:px-0 text-start self-start mb-2 text-black`}>
            {header}
        </h2>
    );
}
