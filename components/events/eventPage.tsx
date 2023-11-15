import SectionTitle from '@/components/events/sectionTitle';
import { events } from '@/components/events/eventData';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import ErrorPage from '../../app/(site)/feilside/page';
import Link from 'next/link';

// Define a prop type for the component
type EventPageProps = {
    eventId: string;
};

// Create the EventPage component
const EventPage: React.FC<EventPageProps> = ({ eventId }) => {
    const event = events.find((event) => event.id === eventId);
    if (!event) return <ErrorPage />;

    // Function to transform event description text into paragraphs with line breaks
    const getDescriptionWithLineBreaks = (text: string): JSX.Element[] => {
        return text.split('\n').map((item: string, key: number) => (
            <span key={key}>
                {item}
                <br />
                <br />
            </span>
        ));
    };

    return (
        <div className='bg-gradient-to-r from-gray-800 via-gray-900 to-black'>
            <div className='container mx-auto px-4 py-10'>
                {' '}
                {/* Set up the main container */}
                <div className='mb-10'>
                    {' '}
                    {/* Margin bottom for spacing */}
                    <SectionTitle title={event.title} /> {/* Render the section title with the event's title */}
                </div>
                {/* Container for the event detail card with a maximum width and rounded corners */}
                <div className='max-w-7xl mx-auto rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105'>
                    {/* Flex container to align image and content side by side on medium screens and larger */}
                    <div className='flex flex-col md:flex-row md:items-center bg-white'>
                        {/* Container for the event image with padding and responsive layout */}
                        <div className='md:flex-shrink-0 md:w-1/2 p-4'>
                            <Image src={event.imageUrl} alt={event.alt} width={400} height={400} layout='responsive' className='rounded-l-xl' />
                        </div>
                        {/* Container for the event content with text styling and gradient background */}
                        <div className='md:w-1/2 p-8 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-r-xl'>
                            {/* Event subtitle and description with margin bottom for spacing */}
                            <div>
                                <h3 className='text-2xl font-bold mb-6'>{event.subtitle}</h3>
                                <p className='whitespace-pre-line mb-6'>{getDescriptionWithLineBreaks(event.description)}</p>
                            </div>
                            {/* Link to return to the events list */}
                            <div className='pt-4'>
                                <Link
                                    href='/alle-arrangementer'
                                    passHref
                                    className='inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full font-medium transition duration-300 transform hover:-translate-y-1 hover:bg-opacity-90 shadow-md'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-5 w-5 mr-2 text-blue-500'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                                    </svg>
                                    Tilbake
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
