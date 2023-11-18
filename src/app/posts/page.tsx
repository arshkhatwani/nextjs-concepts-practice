import Heading from "@/components/Heading";
import { getPosts } from "./action";
import PostCard from "@/components/PostCard";

export default async function Posts() {
    const posts = await getPosts();

    return (
        <div className="w-5/6">
            <Heading className="text-center mb-8">Your Posts</Heading>

            {posts.map((post) => (
                <PostCard key={post.id} {...post} />
            ))}
        </div>
    );
}
