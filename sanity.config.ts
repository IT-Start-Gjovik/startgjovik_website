import { defineConfig } from "sanity";
import {deskTool} from "sanity/desk";
import event from "./backend/schemas/event";


// Config for sanity
const config = defineConfig({
    projectId: "a42ubgcg",
    dataset: "production",
    apiVersion: "2023-07-06",
    title: "Start Gjøvik Website",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: [event]}
});

export default config;