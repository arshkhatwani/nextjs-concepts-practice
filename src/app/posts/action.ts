"use server";

import prisma from "@/db";

export async function savePost(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    await prisma.post.create({ data: { title, description } });
}
