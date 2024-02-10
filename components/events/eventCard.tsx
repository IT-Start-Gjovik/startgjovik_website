import getEnglishMonth from '@/utils/englishMonth';
import Image from 'next/image';
import Button from '../Button/button';

// Interface for the event card
interface EventProps {
    imageUrl: string;
    title: string;
    date?: string;
    time?: string;
    description: string;
    slug: string;
}

// Event card itself
const EventCard: React.FC<EventProps> = ({ date, title, imageUrl, time, description, slug }: EventProps) => {
    // const [dayNum, monthNorwegian] = date ? split(date, ' ') : [null, null];
    // const eventDateTime = date && time ? new Date(`${dayNum} ${getEnglishMonth(monthNorwegian as any)} ${new Date().getFullYear()} ${time}`) : null;

    if (!date) return null;
    const currentDateTime = new Date().toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit'});
    const eventFinished = currentDateTime >= date ? true : false;
    if (eventFinished) return null;

    return (
        <div className='flex flex-col flex-grow max-w-[345px] h-[515px]'>
            <div className='flex flex-grow h-[432px] bg-gray-900 rounded-[50px] overflow-hidden relative'>
                <Image src={imageUrl} alt='event image' layout='fill' objectFit='cover' className='rounded-t-[50px] opacity-70 '/>
                <div className='absolute inset-0 flex flex-col items-center justify-end mb-5'>
                    <p className='text-[36px] font-bold text-center'>{title}</p>
                    <p className='text-[24px]'>{date}   </p>
                </div>
            </div>
            <Button text="PÅMELDING" link={`/arrangementer/${slug}`} adaptiv={true} />
        </div>
    );
};

export default EventCard;