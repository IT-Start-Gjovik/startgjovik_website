import { EventCardType } from "@/types/EventCardType";
import { EventPageType } from "@/types/EventPageType";
import { createClient, groq } from "next-sanity";

// Async function that gets all event cards available 
export async function getEventCards(): Promise<EventCardType[]>{
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false 
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
    )
}

// Get a single event page based on the slug
export async function getEventPage(slug: string): Promise<EventPageType> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false 
    });


    return client.fetch(
      groq`*[_type == "event" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        "image": image.asset->url,
        joinurl,
        content
      }`,
      { slug }
    )
}


export async function getEventPages(): Promise<EventPageType[]> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false 
    });

    return client.fetch(
        groq`*[_type == "event"]{
          _id,
          title,
          "slug": slug.current,
          "image": image.asset->url,
          joinurl,
          content
        }`
      )

}