import React from 'react';
import { useRouter } from 'next/router';
import { events } from '@/components/events/eventData';
import ErrorPage from '../feilside/page';

// This component renders the detail page for a specific event.
const EventDetailPage: React.FC = () => {
    const router = useRouter(); // Next.js hook to access the router object
    const { eventId } = router.query; // Extracting the eventId from the URL

    // Find the event by its id from the predefined events array
    const event = events.find((e) => e.id === eventId);

    // If no event matches the id, render the ErrorPage component
    if (!event) {
        return <ErrorPage />;
    }

    // Render the details of the event if found
    return (
        <div>
            <h1>{event.title}</h1> {/* Event title */}
            <p>{event.description}</p> {/* Event description */}
        </div>
    );
};

export default EventDetailPage;
