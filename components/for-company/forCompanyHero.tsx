// import ImageTextContainer from "../imageTextConatiner"
import Image from 'next/image';

export default function ForCompanyHero() {
    return (
        <>
       <div className="relative min-w-[970px] flex flex-col items-center justify-center ">
            <h1 className='text-2xl md:text-4xl w-[970px] font-extrabold pt-5 px-5 '>
                Hva får du ut av et samarbeid med oss?
            </h1>
            <p className="text-[16px] mt-2 w-[970px] md:text-xl">
                Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å samarbeide 
                med engasjerte studenter fra NTNU Gjøvik. Dette gir dere muligheten til å utvikle 
                nye fremtidige medarbeidere og samarbeidspartnere til deres bedrift eller organisasjon!
            </p>
        </div>
        <div className="relative w-[970px] h-[300px] my-2">
        <Image
            src='/images/for-company/hero.png'
            alt='hero'
            className="rounded-xl"
            layout="fill"
            objectFit="cover" // This will make the image cover the entire area of the div
        />
        </div>
        </>
    )
}



// const info = {
//     title: 'Hva får du ut av et samarbeid med oss?',
//     description:
//     `Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å samarbeide 
//     med engasjerte studenter fra NTNU Gjøvik. Dette gir dere muligheten til å utvikle 
//     nye fremtidige medarbeidere og samarbeidspartnere til deres bedrift eller organisasjon!`,
//     imageSrc: '/images/for-company/hero.png',
//     backgroundColor: 'bg-bg-primary',
//     isImageLeft: true,
// }
{/* <ImageTextContainer {...info} /> */}