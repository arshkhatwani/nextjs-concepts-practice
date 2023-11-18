import Heading from "@/components/Heading";
import { getAllPosts } from "../action";
import PostCard from "@/components/PostCard";
import { ApiPost } from "@/types";

export default async function AllPosts() {
    const posts = (await getAllPosts()) as ApiPost[];

    return (
        <div>
            <Heading className="text-center mb-8">All Posts</Heading>

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
