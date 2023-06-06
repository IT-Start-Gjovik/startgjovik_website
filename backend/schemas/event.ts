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
            title: "Description",
            type: "text",
            validation: (Rule: { max: (arg0: number) => any }) => Rule.max(150),
        },
        {
            name: "datetime",
            title: "Date and Time",
            type: "datetime",
        },
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
    ],
};

export default event;
