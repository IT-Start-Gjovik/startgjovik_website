const event = {
    name: "event",
    title: "Events",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description (Kort forklaring til event kort)",
            type: "text",
            validation: (Rule: { max: (arg0: number) => any }) => Rule.max(150),
        },
        {
            name: "datetime",
            title: "Date and Time",
            type: "datetime",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" }
        }
        ,
        {
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    Title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name:"url",
            title: "Url (Forms)",
            type: "url",
            required: true
        },
        {
            name:"content",
            title: "Content (100-500 ord)",
            type: "array",
            of: [{type: "block"}]
        }
    ],
};

export default event;
