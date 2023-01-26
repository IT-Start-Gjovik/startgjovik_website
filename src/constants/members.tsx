
export type MemberType = {
    id: number,
    name: string ,
    study: string,
    role: string ,
    attribute: string[],
    description : string

}

export const Members: MemberType[] = [
    {
        id: 2223,
        name: "Kjetil Indrehus",
        study: "Dataingeniør 2.året",
        role: "Nettside Utvikler",
        attribute: ["It", "Podcast"],
        description: "Liker å kode på fritida og lage mye gøy"

    },
    {
        id: 333,
        name: "Morten Jentoftsen",
        study: "Elektroingeniør - 3.året",
        role: "Promo Ansvarlig",
        attribute: ["promo", "styret"],
        description: "Liker å kode på fritida og lage mye gøy"

    }
]