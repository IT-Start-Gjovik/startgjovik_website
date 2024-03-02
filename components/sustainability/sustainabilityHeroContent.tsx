import Image from 'next/image';
import Link from 'next/link';
export default function SustainabilityHeroContent() {
    return (
        <>
            <h2 className='text-2xl md:text-4xl font-medium pt-5 px-5 md:px-0 self-start'>
                Inspirerer til endring
            </h2>
            <p className='text-[18px] mt-2 md:text-2xl'>
                Vi tror på kraften i ungdommelig kreativitet og engasjement for å
                forme en mer bærekraftig fremtid. Vår dedikasjon til bærekraft
                reflekteres i hvordan vi tilnærmer oss alle våre prosjekter og
                initiativer, alltid med mål om å støtte og oppnå FNs bærekraftsmål.
                Gjennom våre aktiviteter, som blant annet,{' '}
                <Link
                    href='/alle-arrangementer/casebreaker'
                    target='_blank'
                    className='underline'>
                    casebreaker
                </Link>
                , foredrag og nettverksevents, inspirerer vi studenter til å utvikle
                og realisere ideer som ikke bare fremmer økonomisk vekst, men også
                ivaretar miljømessige og sosiale hensyn.
            </p>
            <Image
                src='/images/sustainability/sustainability-hero-text.jpg'
                alt=''
                width={1123}
                height={256}
                className='my-6'
            />
        </>
    );
}
