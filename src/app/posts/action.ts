"use server";

import prisma from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function savePost(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    await prisma.post.create({ data: { title, description } });

    revalidatePath("/posts");
    redirect("/posts");
}

export async function getPosts() {
    const posts = await prisma.post.findMany();
    return posts;
}

export async function getAllPosts() {
    const API_URL = "https://dummyjson.com/posts";
    const data = await fetch(API_URL, {
        next: {
            revalidate: 30, // will fetch again after 30 seconds
        },
    });
    const posts = await data.json();
    return posts.posts;
}
