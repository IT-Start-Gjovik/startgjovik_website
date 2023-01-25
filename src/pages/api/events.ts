// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Events } from '@/constants/events'
import type { NextApiRequest, NextApiResponse } from 'next'

export type Event = {
    id: string,
    title: string,
    tag: string,
    date: string,
    time: string,
    desctiption: string,
    link: string
    
}


type EventsType = {
    list: Event[]
}

export default function handler( req: NextApiRequest,res: NextApiResponse) {
    const {method} = req;

    if(method == "GET"){
        res.status(200).json(Events);
        return;
    }
  
    res.status(400).json("ERORR");
}
