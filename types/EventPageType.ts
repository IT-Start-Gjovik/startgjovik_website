import { PortableTextBlock } from "sanity";

export type EventPageType = {
    _id: string,
    title: string,
    datetime: string,
    image: string,
    slug: string,
    url: string,
    content: PortableTextBlock[],
    
}