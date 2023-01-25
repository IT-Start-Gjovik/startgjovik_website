export type Event = {
    id: string,
    title: string,
    tag: string,
    date: string,
    time: string,
    desctiption: string,
    link: string
    
}

export const Events: Event[] = [
    {
        id: "1",
        title: "Workshop",
        tag: "CASE",
        date: "2023-02-02",
        time: "18:36",
        desctiption: "Workshop for all of our student!",
        link: "www.startgjovik.no"
        
    },
    {
        id: "2",
        title: "IT Foredrag",
        tag: "IT",
        date: "2023-02-06",
        time: "19:00",
        desctiption: "IT Foredrag!",
        link: "www.startgjovik.no"
        
    },
];