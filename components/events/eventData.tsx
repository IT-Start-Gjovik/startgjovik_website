// Base URL for images (will replace later)
const BASE_IMAGE_URL = '/images/startLogo.png';
// Base URL for events, used to construct the link for each event
const BASE_EVENT_URL = '/alle-arrangementer';

// Array of objects representing events
export const events = [
    // Event object structure
    {
        id: '1', // Unique identifier for the event
        imageUrl: BASE_IMAGE_URL,
        title: 'BCM',
        alt: 'BCM',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/bcm`, // URL for the event detail page
    },
    {
        id: '2',
        imageUrl: BASE_IMAGE_URL,
        title: 'Casebreaker',
        alt: 'casebreaker',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/casebreaker`,
    },
    {
        id: '3',
        imageUrl: BASE_IMAGE_URL,
        title: 'Hvordan starte bedrift fra A til Å',
        alt: 'hvordan starte bedrift fra a til å',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/hvordan-starte-bedrift-fra-a-til-aa`,
    },
    {
        id: '4',
        imageUrl: BASE_IMAGE_URL,
        title: 'Idèkonkurranse',
        alt: 'idekonkurranse',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/idekonkurranse`,
    },
    {
        id: '5',
        imageUrl: BASE_IMAGE_URL,
        title: 'Møt en gründer',
        alt: 'møt en grunder',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/mot-en-grunder`,
    },
    {
        id: '6',
        imageUrl: BASE_IMAGE_URL,
        title: 'Andre arrangementer',
        alt: 'andre arrangementer',
        description: 'Beskrivelse av arrangementet her.',
        link: `${BASE_EVENT_URL}/andre-arrangementer`,
    },
];
