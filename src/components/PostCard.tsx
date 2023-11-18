import { Post } from "@prisma/client";

export default function PostCard({ id, title, description }: Post) {
    return (
        <div>
            <h1>{title}</h1>

            <p>{description}</p>
        </div>
    );
}
