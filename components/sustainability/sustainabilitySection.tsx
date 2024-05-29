import Image from 'next/image';
import Button from '../Button/button';

export default function SustainabilitySection() {
    return (
        <>
            <div className='bg-white grid sm:grid-cols-1 xl:grid-cols-2 sm:gap-10 w-full xl:gap-28 p-4 md:px-10 lg:px-40 py-24'>
                <div className='flex justify-center items-center'>
                    <Image
                        src='/images/sustainability/bærekraft.png'
                        alt='bærekraftig bilde'
                        width={1200}
                        height={620}
                        className='md:max-w-[35rem]'
                        objectFit='cover'
                    />
                </div>
                <div>
                    <h1 className='text-[#132D4E] font-medium text-3xl md:text-5xl mb-4'>
                        Bærekraft
                    </h1>
                    <p className='xl:text-[30px] sm:text-small text-black'>
                        Vi tror på kraften i ungdommelig kreativitet og engasjement
                        for å forme en mer bærekraftig fremtid.
                    </p>
                    <Button
                        text='LES MER OM BÆREKRAFT'
                        link='/baerekraft'
                        adaptiv={true}
                    />
                </div>
            </div>
        </>
    );
}
