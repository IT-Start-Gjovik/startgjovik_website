import Image from 'next/image';
import Link from 'next/link';
import HeroHeader from '../hero/heroHeader';
import HeroText from '../hero/heroText';
export default function SustainabilityHeroContent() {
    return (
        <>
            <HeroHeader header='Inspirerer til endring' />

            <HeroText>
                Vi tror på kraften i ungdommelig kreativitet og engasjement for å
                forme en mer bærekraftig fremtid. Vår dedikasjon til bærekraft
                reflekteres i hvordan vi tilnærmer oss alle våre prosjekter og
                initiativer, alltid med mål om å støtte og oppnå FNs bærekraftsmål.
                Gjennom våre aktiviteter, som blant annet,{' '}
                <Link href='/alle-arrangementer/casebreaker' className='underline'>
                    casebreaker
                </Link>
                , foredrag og nettverksevents, inspirerer vi studenter til å utvikle
                og realisere ideer som ikke bare fremmer økonomisk vekst, men også
                ivaretar miljømessige og sosiale hensyn.
            </HeroText>
            <div className='max-h-[300px] w-full'>
                <Image
                    src='/images/sustainability/sustainability-hero-text.jpg'
                    alt=''
                    width={1080}
                    height={200}
                    className='object-cover md:object-none h-28 md:h-64 py-3'
                />
            </div>
        </>
    );
}
