import Image from 'next/image';
import Link from 'next/link';

interface SustainabilityImageProps {
    title: string;
    description: string;
    imageSrc: string;
    linkUrl: string;
}

export default function SustainabilityGoal({ title, description, imageSrc, linkUrl }: SustainabilityImageProps) {
    return (
        <div className='w-fit m-auto sm:m-0 flex flex-col items-center justify-center hover:scale-105 duration-500 border-b border-l border-r border-solid rounded-2xl p-1'>
            <Link href={linkUrl} target='_blank' rel='noopener noreferrer' aria-label={`Read more about ${title}`}>
                <div className='relative overflow-hidden rounded-xl mb-2 max-w-fit'>
                    <Image src={imageSrc} width={280} height={280} alt={`Bilde av bærekraftsmål: ${title}`} className=' transition-opacity duration-1000' />
                    <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-1000'></div>
                </div>
            </Link>
            <p className='flex-1 max-w-[280px] text-center md:text-start mx-1 overflow-x-clip text-lg'>{description}</p>
        </div>
    );
}
