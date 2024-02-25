import Button from '../Button/button';

export default function HomeHeroContent() {
    return (
        <>
            <p className='text-xl md:text-2xl font-bold text-center'>
                En studentorganisasjon med lidenskap for entreprenørskap og
                bærekraftig utvikling
            </p>
            <Button text='LES MER OM OSS' link='/om-oss' />
        </>
    );
}
