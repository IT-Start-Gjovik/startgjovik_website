import { JoinStatus } from "@/components/JoinList/joinlistelement";

const verv = {
    name: "verv",
    title: "Verv",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Tittel",
            description: "Tittel til verv. F.eks IT Verv",
            type: "string",
            required: true
        },
        {
            name:"url",
            title: "Url",
            description: "Link til påmeldingskjema for vervet",
            type: "url",
            required: true
        },
        {
            title: "Status",
            description: "Velg status for opptak til vervet. NB! Kun åpen status vil gi tilgang til påmeldingen",
            name: "type",
            type: "string",
            options: {
              list: [
                { title: "Open", value: JoinStatus.OPEN },
                { title: "Coming Soon", value: JoinStatus.COMING_SOON },
                { title: "Closed", value: JoinStatus.CLOSED },
              ],
            },
            initialValue: JoinStatus.COMING_SOON
          }
    ],
};

export default verv;
