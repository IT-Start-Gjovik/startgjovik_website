import React from 'react';
import { createClient, groq } from "next-sanity";
import { EventCardType } from "@/types/EventCardType";

export async function getEventCards(): Promise<EventCardType[]> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false,
    });

    const currentDate = new Date().toISOString();

    return client.fetch(
        groq`*[_type == "event" && datetime > $currentDate] | order(datetime asc){
            _id,
            title,
            description,
            datetime,
            "image": image.asset -> url,
            "slug": slug.current,
        }`,
        { currentDate }
    );
}

export async function getPastEventCards(): Promise<EventCardType[]> {
    const client = createClient({
        projectId: "a42ubgcg",
        dataset: "production",
        apiVersion: "2023-07-06",
        useCdn: false,
    });

    const currentDate = new Date().toISOString();

    return client.fetch(
        groq`*[_type == "event" && datetime < $currentDate] | order(datetime desc){
            _id,
            title,
            description,
            datetime,
            "image": image.asset -> url,
            "slug": slug.current,
        }`,
        { currentDate }
    );
}

