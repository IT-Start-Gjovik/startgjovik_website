import { EventCardType } from "@/types/EventCardType";
import { EventPageType } from "@/types/EventPageType";
import { VervType } from "@/types/Verv";
import { createClient, groq } from "next-sanity";

// Async function that gets all event cards available
export async function getEventCards(): Promise<EventCardType[]> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == "event"]{
            _id,
            title,
            description,
            datetime,
            "image": image.asset -> url,
            "slug": slug.current,
        }`
    );
}

// Get a single event page based on the slug
export async function getEventPage(slug: string): Promise<EventPageType> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == "event" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        datetime
      }`,
        { slug }
    );
}

// Async function that gets all vervtypes from the backend
export async function getVervs(): Promise<VervType[]> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == "verv"]{
            _id,
            title,
            url,
            type
        }`
    );
}
