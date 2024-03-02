import SustainabilityGoal from './sustainabilityGoal';

const sustainabilityGoals = [
    {
        title: 'Mål 9',
        description:
            'Fremme bærekraftig industriell vekst, utvikle infrastruktur og oppmuntre til innovasjon.',
        imageSrc: '/images/sustainability/goal9.png',
        linkUrl:
            'https://www.fn.no/om-fn/fns-baerekraftsmaal/industri-innovasjon-og-infrastruktur',
        backgroundColor: 'bg-primary-dark',
        isImageLeft: false,
    },
    {
        title: 'Mål 13',
        description:
            'Handle raskt for å bekjempe klimaendringene og deres virkninger.',
        imageSrc: '/images/sustainability/goal13.png',
        linkUrl:
            'https://www.fn.no/om-fn/fns-baerekraftsmaal/stoppe-klimaendringene',
        backgroundColor: 'bg-primary',
        isImageLeft: true,
    },
    {
        title: 'Mål 17',
        description:
            'Forbedre globale partnerskap for å støtte og nå bærekraftsmålene.',
        imageSrc: '/images/sustainability/goal17.png',
        linkUrl:
            'https://www.fn.no/om-fn/fns-baerekraftsmaal/samarbeid-for-aa-naa-maalene',
        backgroundColor: 'bg-primary-dark',
        isImageLeft: false,
    },
];

export default function SustainabilityGoalsContainer() {
    return (
        <section>
            {sustainabilityGoals.map((goal, index) => {
                return <SustainabilityGoal key={index} {...goal} />;
            })}
        </section>
    );
}
