import { Post } from "@prisma/client";

export default function PostCard({ title, description }: Post) {
    return (
        <div className="border-2 border-gray-400 rounded-lg p-5 my-3">
            <h1 className="text-3xl font-semibold mb-3">{title}</h1>

            <p className="text-2xl font-medium text-gray-600">{description}</p>
        </div>
    );
}
