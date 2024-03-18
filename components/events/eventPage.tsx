import { events } from '@/components/events/eventData';
import SectionTitle from '@/components/events/sectionTitle';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/page';
import Image from 'next/image';
import Link from 'next/link';
import ErrorPage from '../../app/(site)/feilside/page';

type EventPageProps = {
    eventId: string;
};

const EventPage: React.FC<EventPageProps> = ({ eventId }) => {
    const event = events.find((event) => event.id === eventId);
    if (!event) return <ErrorPage />;

    const getDescriptionWithLineBreaks = (text: string): JSX.Element[] => {
        return text.split('\n').map((item: string, key: number) => (
            <span key={key} className='block mb-4 last:mb-0'>
                {item}
            </span>
        ));
    };

    return (
        <div className='bg-[#132D4E] min-h-screen'>
            <Header />
            <div className='container mx-auto px-4 py-10'>
                <div className='mt-20 mb-10'>
                    <SectionTitle title={event.title} />
                </div>
                <div className='max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-20'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='md:flex-shrink-0'>
                            <Image
                                src={event.imageUrl}
                                alt={event.alt}
                                width={400}
                                height={400}
                                layout='responsive'
                                className='object-cover object-center rounded-l-xl'
                            />
                        </div>
                        <div className='p-8 text-gray-800'>
                            <h3
                                className='text-2xl font-bold mb-4'
                                style={{ color: '#132D4E' }}>
                                {event.subtitle}
                            </h3>
                            <div
                                className='text-base leading-relaxed'
                                style={{ color: '#4a4a4a' }}>
                                {getDescriptionWithLineBreaks(event.description)}
                            </div>
                            <Link
                                href='/alle-arrangementer'
                                passHref
                                className='mt-6 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#B2C51F] hover:bg-0f2540 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-132D4E transition duration-300'>
                                Tilbake
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='ml-2 h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 19l-7-7 7-7'
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EventPage;
