import Logo from '@/components/UI/logo';
import Button from '@/components/Button/button';
import Frontprop from './frontProp';

export default function FrontPage() {
    return (
        <div className='relative'>
            <Frontprop path="/images/start_casebreaker.png" title='VELKOMEN TIL' logo={true} color='#132D4E'/>
            <div
                className='w-full absolute bottom-0'
                style={{
                    height: '35%',
                }}>
                    <div className='flex flex-col lg:mt-[150px] mt-[120px] items-center '>
                        <p className='text-[18px] md:text-[28px] text-center'>
                            En studentorganisasjon med lidenskap for entreprenørskap
                            og bærekraftig utvikling
                        </p>
                        <Button text='LES MER OM OSS' link='/om-oss' />
                    </div>
            </div>
        </div>
    );
}
