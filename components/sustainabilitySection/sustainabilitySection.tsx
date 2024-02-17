import Button from "../Button/button";
import Image from "next/image";

export default function SustainabilitySection() {
    return (
        <>
        <div className='bg-white grid grid-cols-2 p-[100px]'>
            <div className='flex justify-end p-6'>
                <Image
                    src='/images/sustainability/bærekraft.png'
                    alt='placeholder'
                    width={1200}
                    height={620}
                    objectFit='contain'
                />
            </div>
            <div className='p-6 '>
                <h1 className='text-[#132D4E] text-[64px] font-bold'>Bærekraft</h1>
                <p className='text-[30px] text-black'>
                    Vi tror på kraften i ungdommelig kreativitet og engasjement for å
                    forme en mer bærekraftig fremtid.
                </p>
                <Button text="LES MER OM BÆREKRAFT" link="/baerekraft" adaptiv={true}/>
            </div>
        </div>
        </>
    )
}