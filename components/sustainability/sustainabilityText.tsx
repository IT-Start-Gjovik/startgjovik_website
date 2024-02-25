import Link from 'next/link';

export default function SustainabilityText() {
    return (
        <section className='border-solid border-red-500 border-2'>
            <h2 className='font-bold text-4xl text-black'>Inspirerer til endring</h2>
            <article className=' '>
                <p className='text-lg md:text-xl'>
                    Vi tror på kraften i ungdommelig kreativitet og engasjement for å
                    forme en mer bærekraftig fremtid. Vår dedikasjon til bærekraft
                    reflekteres i hvordan vi tilnærmer oss alle våre prosjekter og
                    initiativer, alltid med mål om å støtte og oppnå FNs
                    bærekraftsmål. Gjennom våre aktiviteter, som blant annet,{' '}
                    <Link
                        href='/alle-arrangementer/casebreaker'
                        target='_blank'
                        className=' text-blue-400'>
                        casebreaker
                    </Link>
                    , foredrag og nettverksevents, inspirerer vi studenter til å
                    utvikle og realisere ideer som ikke bare fremmer økonomisk vekst,
                    men også ivaretar miljømessige og sosiale hensyn.
                </p>
            </article>
        </section>
    );
}
