import { JoinStatus } from "@/enums/EJoinStatus";

export type VervType = {
    _id: string;
    title: string;
    url: string;
    type: JoinStatus;
};
