import Button from '../Button/button';
import HeroHeader from '../hero/heroHeader';

export default function HomeHeroContent() {
    return (
        <>
            <HeroHeader
                header='En studentorganisasjon med lidenskap for entreprenørskap og
                bærekraftig utvikling'
            />
            <Button text='LES MER OM OSS' link='/om-oss' />
        </>
    );
}
