import Logo from '@/components/UI/logo';
import Button from '@/components/Button/button';
import Frontprop from './frontProp';

interface FrontPageProps {
    path: string;
    alt?: string;
}

export default function FrontPage( {path, alt} : FrontPageProps) {
    return (
        <div className='relative'>
            <Frontprop path={path} title='VELKOMEN TIL' alt={alt} logo={true} />
            <div
                className='w-full absolute bottom-0'
                style={{
                    height: '35%',
                }}>
                <div
                    className='bg-[#132D4E] text-center w-full absolute overflow-hidden opacity-50'
                    style={{
                        height: '100%',
                        clipPath: 'ellipse(70% 100% at 50% 100%)',
                    }}></div>

                <div
                    className='bg-[#132D4E] text-center w-full flex flex-col justify-center items-center relative overflow-hidden'
                    style={{
                        height: '100%',
                        clipPath: 'ellipse(70% 90% at 50% 100%)',
                    }}>
                    <div className='flex flex-col mt-[100px]'>
                        <p className='text-[18px] md:text-[28px]'>
                            En studentorganisasjon med lidenskap for entreprenørskap
                            og bærekraftig utvikling
                        </p>
                        <Button text='LES MER OM OSS' link='/om-oss' />
                    </div>
                </div>
            </div>
        </div>
    );
}
