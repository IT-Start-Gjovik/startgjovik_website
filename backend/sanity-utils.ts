import { EventCardType } from '@/types/EventCardType';
import { EventPageType } from '@/types/EventPageType';
import { VervType } from '@/types/Verv';
import { MemberTypes } from '@/types/memberTypes';
import { ImageCategory } from '@/enums/EImageCategory';
import { createClient, groq } from 'next-sanity';

const client = createClient({
    projectId: 'a42ubgcg',
    dataset: 'production',
    apiVersion: '2023-07-06',
    useCdn: false,
});

export async function getEventCards(): Promise<EventCardType[]> {
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
    return client.fetch(
        groq`*[_type == "verv"]{
            _id,
            title,
            url,
            type
        }`,
    );
}

export async function getStartBoard(): Promise<MemberTypes[]> {
    return client.fetch(
        groq`*[_type == "styre"]{
            _id,
            title,
            url,
            "slug": slug.current,
            name,
            "image": image.asset->url,
            linkdn,
            stilling,
            email
            }`,
    );
}
type ImageCategoryType = keyof typeof ImageCategory;
export async function fetchImageByCategory(category: ImageCategoryType) {
    const query = `*[_type == "images"]{
              teamPic{
                asset->{
                  _id,
                  url
                },
                  caption,
                  year
                },
                homePic{
                  asset->{
                    _id,
                    url
                  },
                  caption,
                  year
                }
              }`;

    const result = await client
        .fetch(
            query,
            {},
            {
                next: { revalidate: 60 },
            },
        )
        .then((res) => res[0][category]);

    return result;
}
