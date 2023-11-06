import SustainabilityGoal from './sustainabilityGoal';

const sustainabilityGoals = [
    {
        title: 'Mål 9',
        description: 'Fremme bærekraftig industriell vekst, utvikle infrastruktur og oppmuntre til innovasjon.',
        imageSrc: '/images/sustainability/goal9.png',
        linkUrl: 'https://www.fn.no/om-fn/fns-baerekraftsmaal/industri-innovasjon-og-infrastruktur',
    },
    {
        title: 'Mål 13',
        description: 'Handle raskt for å bekjempe klimaendringene og deres virkninger.',
        imageSrc: '/images/sustainability/goal13.png',
        linkUrl: 'https://www.fn.no/om-fn/fns-baerekraftsmaal/stoppe-klimaendringene',
    },
    {
        title: 'Mål 17',
        description: 'Forbedre globale partnerskap for å støtte og nå bærekraftsmålene.',
        imageSrc: '/images/sustainability/goal17.png',
        linkUrl: 'https://www.fn.no/om-fn/fns-baerekraftsmaal/samarbeid-for-aa-naa-maalene',
    },
];

export default function SustainabilityImageContainer() {
    return (
        <section className='grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] min-w-full gap-4 mt-10'>
            {sustainabilityGoals.map((goal, index) => {
                return <SustainabilityGoal key={index} title={goal.title} linkUrl={goal.linkUrl} description={goal.description} imageSrc={goal.imageSrc} />;
            })}
        </section>
    );
}
