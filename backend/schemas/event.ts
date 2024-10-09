const Event = {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title på Event ',
            description: "Tittel til event. F.eks 'Casebreaker'",
            type: 'string',
        },
        {
            name: 'description',
            title: ' Beskrivelse av Event',
            type: 'text',
            description: 'En kort beskrivelse av Event(maks 150 ord)',
            validation: (Rule: { max: (arg0: number) => any }) => Rule.max(150),
        },
        {
            name: 'datetime',
            title: 'Dato og tidspunkt på event',
            type: 'datetime',
            required: true,
        },
        {
            name: 'slug',
            title: 'URL-mer leselig lenke(slug)',
            type: 'slug',
            options: { source: 'title' },
        },
        {
            name: 'image',
            title: 'Bilde for event',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    Title: 'Forklaring på bilde',
                    description: 'Kort beskrivelse av bildet',
                    type: 'string',
                },
            ],
        },
        {
            name: 'url',
            title: 'Link til Event(for skjermaer)',
            type: 'url',
            required: true,
        },
        {
            name: 'content',
            title: 'Innhold for Event (100-500 Ord) ',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
};

export default Event;
