import Link from 'next/link';

export default function SustainabilityText() {
    return (
        <section>
            <h1 className='text-5xl md:text-7xl md:text-center font-bold'>Bærekraft</h1>
            <article className='mt-5 bg-slate-900 p-5 rounded-lg hover:scale-105 hover:mt-8 duration-1000 shadow-2xl shadow-slate-700'>
                <p className='text-lg md:text-xl'>
                    Vi tror på kraften i ungdommelig kreativitet og engasjement for å forme en mer bærekraftig fremtid. Vår dedikasjon til bærekraft reflekteres
                    i hvordan vi tilnærmer oss alle våre prosjekter og initiativer, alltid med mål om å støtte og oppnå FNs bærekraftsmål. Gjennom våre
                    aktiviteter, som blant annet,{' '}
                    <Link href='/alle-arrangementer/casebreaker' target='_blank' className=' text-blue-400'>
                        casebreaker
                    </Link>
                    , foredrag og nettverksevents, inspirerer vi studenter til å utvikle og realisere ideer som ikke bare fremmer økonomisk vekst, men også
                    ivaretar miljømessige og sosiale hensyn.
                </p>
            </article>
        </section>
    );
}
