import Image from "next/image"
import Frontprop from "../frontPage/frontProp"

export default function ForCompanyHero() {
    return (
        <>
            {/* Introduction */}
            <Frontprop path="/images/for-company/Front.png" color="#ffffff" title="For bedrifter"/>
        </>
    )
}
{/* <div className='flex justify-center h-fit mb-3'>
                <div className='grid w-4/5 sm:grid-cols-1 xl:grid-cols-2 h-auto p-7 shadow-slate-700 bg-slate-900 rounded-xl shadow-2xl xl:justify-self-start'>
                    <div className='flex items-center justify-center rounded-lg relative h-auto'>
                        <Image
                            src='/images/grunder_eksempel.png'
                            height={628} // These sizes will be used for the 'layout="responsive"' setting
                            width={1200}
                            objectFit='contain'
                            className='rounded md:max-w-[35rem] md:h-auto xl:h-auto xl:w-auto' // Adjusted the width to 31.25rem which is equivalent to 500px
                            alt='grunder eksempler'
                        />
                    </div>
                    <article className='xl:p-4 rounded-lg w-full sm:justify-self-center xl:justify-self-end xl:col-span-1 xl:h-auto'>
                        <h2 className='text-2xl xl:ml-10 font-extrabold mb-2'>Hva får du ut av et samarbeid?</h2>
                        <p className='xl:p-4 xl:text-xl leading-snug overflow-auto text-pretty'>
                            Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å samarbeide med engasjerte studenter fra NTNU Gjøvik. Dette gir
                            dere muligheten til å utvikle nye fremtidige medarbeidere og samarbeidspartnere til deres bedrift eller organisasjon.
                        </p>
                    </article>
                </div>
            </div> */}