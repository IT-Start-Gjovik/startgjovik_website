// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Members } from '@/constants/members';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler( req: NextApiRequest,res: NextApiResponse) {
    const {method} = req;

    if(method == "GET"){
        res.status(200).json(Members);
        return;
    }
  
    res.status(400).json("ERORR");
}
