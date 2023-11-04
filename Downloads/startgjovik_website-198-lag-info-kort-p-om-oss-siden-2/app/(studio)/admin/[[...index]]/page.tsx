"use client"; // For rendering this on the client 

import config from "@/sanity.config";
import {NextStudio} from "next-sanity/studio";


export default function AdminPage(){
    return <NextStudio config={config} />
}