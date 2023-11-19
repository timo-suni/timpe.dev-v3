import { createClient, groq } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";
import { Project } from "@/types/Project";
import { Skill } from "@/types/Skill";

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
})

export async function getSkills(): Promise<Skill[]> {

    return client.fetch(
        groq`*[_type == "skill"]{
            _id,
            _createdAt,
            order,
            title,
            content,
        } | order(order asc)`
    );

}

export async function getProjects(): Promise<Project[]> {

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            order,
            title,
            slug,
            image,
            alt,
            content,
            pills,
            links
        } | order(order asc)`
    );

}