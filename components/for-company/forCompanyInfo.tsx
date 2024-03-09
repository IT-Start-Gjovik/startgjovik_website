import ImageTextContainer from "../imageTextConatiner";

const sections = [
    {
        title: 'Arrangement',
        description:
        `Vi tilbyr et miljø for å skape innovative ideer gjennom våre workshops, foredrag og andre arrangementer. 
        Her kan dere spille en aktiv rolle i å forme morgendagens innovatører, samtidig som det gir en gyllen 
        anledning for å profilere deres bedrift eller organisasjon, og demonstrere deres engasjement og ekspertise.`,
        imageSrc: '/images/start_casebreaker.png',
        backgroundColor: 'bg-bg-primary-dark',
        isImageLeft: false,
    },

    {
        title: 'Kompetanseutveksling',
        description: 
        `Vi gir dere muligheten til å utvikle deres bedrift eller organisasjon gjennom aktiv kompetanseutveksling 
        med studenter. Dette åpner for en verdifull innsikt fra den neste generasjonen av entreprenører, og gir 
        dere muligheten til å forstå og integrere nye, friske perspektiver i deres virksomhet.`,
        imageSrc: '/images/for-company/Kompetanse.png',
        backgroundColor: 'bg-bg-primary',
        isImageLeft: true,
    },

    {
        title: 'Nettverksbygging',
        description:
        `Ved å bli en del av vårt nettverk, åpner dere dørene til en verden av muligheter, der dere kan knytte 
        kontakter med studenter, akademiske institusjoner, samt en rekke bedrifter og organisasjoner. Denne 
        forbindelsen gir en unik mulighet for vekst og utvikling, idet den sammenfører ulike perspektiver og 
        ekspertise.`,
        imageSrc: '/images/start_casebreaker.png',
        backgroundColor: 'bg-bg-primary-dark',
        isImageLeft: false,
    },
]

export default function ForCompanyInfo() { 
    return (
        <>
        {/* Event, skills development and networking */}
        {sections.map((section, index) => {
            return <ImageTextContainer key={index} {...section} />;
        })}     
        </>
    );
}