const Board = {
    name: 'styre',
    title: 'Styre',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Bilde av styre medlem',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    description: 'Hvem er på bildet',
                    type: 'string',
                },
            ],
        },
        {
            name: 'title',
            title: 'Navn på styre medlem',
            type: 'string',
        },
        {
            name: 'stilling',
            title: 'stilling',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'URL-mer leselig lenke(slug)',
            description: 'Enkel navn for link til LINKDN profile',
            type: 'slug',
            options: { source: 'title' },
        },
        {
            name: 'url',
            title: 'linkdn',
            type: 'url',
        },
        {
            name: 'email',
            title: 'E-post',
            type: 'string',
            validation: (Rule: any) =>
                Rule.regex(/^.*@startgjovik\.no$/, {
                    name: 'email',
                    invert: false,
                }).error('Bruk ditt start-mail (XXXX@startgjovik.no)'),
        },
    ],
};

export default Board;
