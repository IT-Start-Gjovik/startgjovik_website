import Image from 'next/image';
import Link from 'next/link';

interface SustainabilityImageProps {
    title: string;
    description: string;
    imageSrc: string;
    linkUrl: string;
    backgroundColor?: string;
    isImageLeft?: boolean;
}

export default function SustainabilityGoal({
    title,
    description,
    imageSrc,
    linkUrl,
    backgroundColor,
    isImageLeft = true,
}: SustainabilityImageProps) {
    return (
        <div
            className={`flex flex-col md:${
                isImageLeft ? 'flex-row-reverse' : 'flex-row'
            } min-w-[375px] py-14 items-center gap-5 md:gap-10 ${
                !isImageLeft && 'md:gap-20'
            } justify-center bg-${backgroundColor}`}>
            <Link href={linkUrl} target='_blank' rel='noopener noreferrer'>
                <Image
                    src={imageSrc}
                    width={280}
                    height={280}
                    alt={`Bilde av bærekraftsmål: ${title}`}
                    className='hover:opacity-80 rounded-lg'
                />
            </Link>
            <p
                className={`max-w-[505px] text-center md:text-start px-2 text-xl md:text-2xl text-${
                    backgroundColor === 'bg-primary' ? 'black' : 'white'
                }`}>
                {description}
            </p>
        </div>
    );
}
