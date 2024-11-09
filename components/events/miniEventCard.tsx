import Image from 'next/image';

interface MiniEventProps {
    imageUrl: string;
    title: string;
    date?: string;
    time?: string;
}

const MiniEventCard: React.FC<MiniEventProps> = ({
    imageUrl,
    title,
    date,
    time,
}) => {
    return (
        <div className='p-10 relative max-w-56 max-h-44 rounded-xl overflow-hidden shadow-md m-2 flex items-center justify-center text-white'>
            <Image
                src={imageUrl}
                alt='event image'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black bg-opacity-50'></div>

            <div className='relative z-10 text-center px-1'>
                <p className='text-md font-semibold'>{title}</p>
                <p className='text-sm'>{date}</p>
                <p className='text-sm'>{time}</p>
            </div>
        </div>
    );
};

export default MiniEventCard;
