import { Post } from "@prisma/client";
import Link from "next/link";

interface Props extends Post {
    isClickable?: boolean;
}

export default function PostCard({
    id,
    title,
    description,
    isClickable,
}: Props) {
    return (
        <Link href={isClickable ? `/posts/${id}` : "#"}>
            <div className="border-2 border-gray-400 rounded-lg p-5 my-3">
                <h1 className="text-3xl font-semibold mb-3">{title}</h1>

                <p className="text-2xl font-medium text-gray-600">
                    {description}
                </p>
            </div>
        </Link>
    );
}
