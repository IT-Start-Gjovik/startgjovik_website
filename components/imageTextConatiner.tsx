import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface imageTextContainerProps {
    title?: string;
    description: string;
    imageSrc: string;
    linkUrl?: string;
    backgroundColor?: string;
    isImageLeft?: boolean;
}

export default function ImageTextContainer({
    title,
    description,
    imageSrc,
    linkUrl,
    backgroundColor,
    isImageLeft = true,
}: imageTextContainerProps) {
    const currentPath = usePathname();

    return (
        <div
            className={`flex flex-col ${
                isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'
            } min-w-[375px] py-14 px-5 items-center gap-5 md:gap-10 justify-center ${backgroundColor}`}>
            <Link
                href={linkUrl || currentPath}
                target={linkUrl ? '_blank' : '_self'}
                rel='noopener noreferrer'>
                <Image
                    src={imageSrc}
                    width={280}
                    height={280}
                    alt={`${title || 'bildetekst'}`}
                    className='hover:opacity-80 rounded-lg'
                />
            </Link>
            <div
                className={`px-2 text-${
                    backgroundColor == 'bg-bg-primary' ? 'black' : 'white'
                } `}>
                {title && (
                    <h2
                        className={`text-3xl md:text-4xl mb-5 font-bold text-center md:text-start `}>
                        {title}
                    </h2>
                )}

                <p
                    className={`max-w-[505px] text-center md:text-start text-xl md:text-2xl `}>
                    {description}
                </p>
            </div>
        </div>
    );
}
