import { createClient, groq } from 'next-sanity';
import { EventCardType } from '@/types/EventCardType';
import { EventPageType } from '@/types/EventPageType';
import { VervType } from '@/types/Verv';

export async function getEventCards(): Promise<EventCardType[]> {
    const client = createClient({
        projectId: 'a42ubgcg',
        dataset: 'production',
        apiVersion: '2023-07-06',
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
        { currentDate },
    );
}

export async function getPastEventCards(): Promise<EventCardType[]> {
    const client = createClient({
        projectId: 'a42ubgcg',
        dataset: 'production',
        apiVersion: '2023-07-06',
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
        { currentDate },
    );
}

export async function getCurrentEventCards(slug: string): Promise<EventPageType> {
    const client = createClient({
        projectId: 'a42ubgcg',
        dataset: 'production',
        apiVersion: '2023-07-06',
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
        { slug },
    );
}

export async function getVervs(): Promise<VervType[]> {
    const client = createClient({
        projectId: 'a42ubgcg',
        dataset: 'production',
        apiVersion: '2023-07-06',
        useCdn: false,
    });

    return client.fetch(
        groq`*[_type == "verv"]{
            _id,
            title,
            url,
            type
        }`,
    );
}
