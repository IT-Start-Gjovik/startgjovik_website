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

            <Image
                src='/images/for-company/hero.png'
                alt=''
                width={1123}
                height={256}
                objectFit='contain'
                className='my-6 max-h-96 md:max-h-96 lg:max-h-96 xl:max-h-96'
            />
        </>
    );
}
