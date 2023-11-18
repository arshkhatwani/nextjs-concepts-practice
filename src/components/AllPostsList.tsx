import { getAllPosts } from "@/app/posts/action";
import PostCard from "./PostCard";
import { ApiPost } from "@/types";

export default async function AllPostsList() {
    const posts = (await getAllPosts()) as ApiPost[];

    return (
        <div>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    description={post.body}
                />
            ))}
        </div>
    );
}
