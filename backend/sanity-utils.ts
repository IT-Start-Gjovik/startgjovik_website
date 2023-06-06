import { createClient, groq } from "next-sanity";

// Async function that gets all event cards available 
export async function getEventCards(){
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
            "image": image.asset -> url
        }`
    )
}