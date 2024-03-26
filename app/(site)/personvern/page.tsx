import Header from '@/components/header/page';

export default function PrivacyPolicyPage() {
    // When the Privacy Policy was updated last.
    const updateDate: string = '9. Juni 2023 kl 19:00';

    return (
        <>
            <Header />
            <main className='flex justify-center min-h-screen'>
                <div className='bg-bg-primary-dark w-screen'>
                    <div className='bg-bg-primary-dark pt-32 px-5 md:px-10 mx-auto w-[1132px]'>
                        <h1 className='text-6xl font-bold '>Privacy Policy</h1>

                        <h2 className=' text-xl my-5'>
                            {' '}
                            Oppdatert: 📅 {updateDate}{' '}
                        </h2>

                        <hr className='h-1 my-8 border-0 bg-slate-400' />

                        {/**Content of Privacy policy */}

                        <h2 className=' font-bold text-2xl '>1. Innledning</h2>

                        <p className=' py-2'>
                            Start Gjøvik er opptatt av å beskytte personvernet til
                            brukerne av vår nettside. Vi samler ikke inn noen
                            personlig identifiserbar informasjon (
                            <a
                                href='https://en.wikipedia.org/wiki/Personal_data'
                                className='text-blue-500 underline'>
                                PII
                            </a>
                            ) om deg som besøkende uten ditt samtykke. Denne
                            personvernerklæringen forklarer hvordan vi håndterer
                            eventuelle personopplysninger som samles inn gjennom
                            informasjonskapsler (
                            <a
                                href='https://en.wikipedia.org/wiki/HTTP_cookie'
                                className='text-blue-500 underline'>
                                cookies
                            </a>{' '}
                            ) eller andre metoder.
                        </p>

                        <h2 className=' font-bold text-2xl '>
                            2. Informasjonskapsler (cookies)
                        </h2>

                        <p className=' py-2'>
                            Vi bruker ikke informasjonskapsler på vår nettside. En
                            informasjonskapsel er en liten tekstfil som lagres på
                            datamaskinen eller enheten din når du besøker en
                            nettside. Den inneholder informasjon om besøket ditt og
                            kan brukes til forskjellige formål, for eksempel å huske
                            innstillingene dine eller analysere nettstedets bruk. Vi
                            benytter oss ikke av slik teknologi for å samle inn
                            personopplysninger.
                        </p>

                        <h2 className=' font-bold text-2xl '>
                            3. Innsamling og bruk av personopplysninger
                        </h2>

                        <p className=' py-2'>
                            Vi kan samle inn personopplysninger fra deg gjennom
                            skjemaer på nettsiden vår, spesielt i forbindelse med
                            påmelding til arrangementer. Slike skjemaer vil tydelig
                            angi hvilke opplysninger som kreves for påmelding, for
                            eksempel navn, kontaktinformasjon eller eventuelle
                            spesifikke behov. Vi vil kun bruke de innhentede
                            opplysningene til formålene som er angitt på skjemaet,
                            for eksempel administrasjon av arrangementet og
                            kommunikasjon i forbindelse med arrangementet.
                        </p>

                        <h2 className=' font-bold text-2xl '>
                            4. Anonymisert datainnsamling
                        </h2>

                        <p className=' py-2'>
                            Vi kan samle inn anonymisert data om besøkendes adferd på
                            nettsiden ved hjelp av tredjeparts teknologi. Denne
                            informasjonen er ikke knyttet til en spesifikk person og
                            brukes kun til analyseformål, for eksempel for å forstå
                            antall sidevisninger eller hvilke sider som er mest
                            besøkte.
                        </p>

                        <h2 className=' font-bold text-2xl '>
                            5. Tredjepartsverktøy og -tjenester
                        </h2>

                        <p className=' py-2'>
                            Nettsiden vår kan benytte seg av tredjepartsverktøy eller
                            -tjenester i tilknytning til{' '}
                            <a
                                href='https://nextjs.org/'
                                className='text-blue-500 underline'>
                                Next.js
                            </a>{' '}
                            og{' '}
                            <a
                                href='https://www.sanity.io/'
                                className='text-blue-500 underline'>
                                Sanity CMS.
                            </a>
                            Disse verktøyene eller tjenestene kan samle inn
                            personopplysninger eller bruke informasjonskapsler i
                            henhold til deres egne personvernerklæringer. Vi
                            oppfordrer deg til å lese personvernerklæringene til
                            disse tredjepartene for å forstå hvordan de håndterer
                            personopplysninger.
                        </p>

                        <h2 className=' font-bold text-2xl '>
                            6. Beskyttelse av personopplysninger
                        </h2>

                        <p className=' py-2'>
                            Selv om vi ikke samler inn personopplysninger gjennom
                            Next.js eller Sanity CMS, tar vi sikkerheten til
                            besøkende på vår nettside alvorlig. Vi implementerer
                            rimelige tiltak for å beskytte nettstedet mot uautorisert
                            tilgang eller endringer.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
