const WeeklyActivity = {
    name: 'weeklyActivity',
    title: 'Ukentlig Aktivitet',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tittel på aktivitet',
            description: "Tittel til aktivitet. F.eks 'Fredagskos'",
            type: 'string',
            required: true,
        },
        {
            name: 'description',
            title: 'Beskrivelse av aktivitet',
            type: 'text',
            description: 'En kort beskrivelse av aktiviteten (maks 150 ord)',
            validation: (Rule: { max: (arg0: number) => any }) => Rule.max(150),
        },
        {
            name: 'date',
            title: 'Dato',
            type: 'datetime',
            description: 'Dato og tidspunkt for aktiviteten (brukes hvis det er en spesifikk dato)',
        },
        {
            name: 'dayOfWeek',
            title: 'Ukedag',
            type: 'string',
            description: 'Hvilken dag i uken aktiviteten finner sted (for gjentagende aktiviteter)',
            options: {
                list: [
                    { title: 'Mandag', value: 'monday' },
                    { title: 'Tirsdag', value: 'tuesday' },
                    { title: 'Onsdag', value: 'wednesday' },
                    { title: 'Torsdag', value: 'thursday' },
                    { title: 'Fredag', value: 'friday' },
                    { title: 'Lørdag', value: 'saturday' },
                    { title: 'Søndag', value: 'sunday' },
                ],
            },
        },
        {
            name: 'time',
            title: 'Tidspunkt',
            type: 'string',
            description: 'Tidspunkt for aktiviteten (f.eks "18:00" eller "18:00 - 20:00")',
        },
        {
            name: 'location',
            title: 'Sted',
            type: 'string',
            description: 'Hvor aktiviteten finner sted',
        },
        {
            name: 'image',
            title: 'Bilde for aktivitet',
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
            name: 'isActive',
            title: 'Aktiv',
            type: 'boolean',
            description: 'Om aktiviteten skal vises på nettsiden',
            initialValue: true,
        },
        {
            name: 'order',
            title: 'Rekkefølge',
            type: 'number',
            description: 'Rekkefølge for visning (lavere tall vises først)',
            initialValue: 0,
        },
        {
            name: 'registrationUrl',
            title: 'Påmeldingslenke',
            type: 'url',
            description: 'Lenke til påmelding (f.eks Google Forms eller ekstern side)',
        },
    ],
};

export default WeeklyActivity;

