// import ImageTextContainer from "../imageTextConatiner"
import Image from 'next/image';
import HeroHeader from '../hero/heroHeader';
import HeroText from '../hero/heroText';

export default function ForCompanyHero() {
    return (
        <>
            <HeroHeader header='Hva får du ut av et samarbeid med oss?' />

            <HeroText>
                Start Gjøvik tilbyr bedrifter og organisasjoner muligheten til å
                samarbeide med engasjerte studenter fra NTNU Gjøvik. Dette gir dere
                muligheten til å utvikle nye fremtidige medarbeidere og
                samarbeidspartnere til deres bedrift eller organisasjon!
            </HeroText>
            <div className='max-h-[300px] w-full'>
                <Image
                    src='/images/for-company/hero.png'
                    alt=''
                    width={1080}
                    height={200}
                    className='object-cover md:object-none h-28 md:h-64 py-3'
                />
            </div>
        </>
    );
}
