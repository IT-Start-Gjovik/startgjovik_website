export default {
    name: 'images',
    type: 'document',
    title: 'Images',
    fields: [
        {
            name: 'teamPic',
            type: 'image',
            title: 'Team Picture',
            options: { hotspot: true },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'year',
                    type: 'number',
                    title: 'Year',
                },
            ],
        },
        {
            name: 'homePic',
            type: 'image',
            title: 'Home Page Picture',
            options: { hotspot: true },
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Caption',
                },
                {
                    name: 'year',
                    type: 'number',
                    title: 'Year',
                },
            ],
        },
    ],
};
