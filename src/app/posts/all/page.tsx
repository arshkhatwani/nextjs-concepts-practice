import Heading from "@/components/Heading";
import AllPostsList from "@/components/AllPostsList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function AllPosts() {
    return (
        <div>
            <Heading className="text-center mb-8">All Posts</Heading>

            <Suspense fallback={<Loading />}>
                <AllPostsList />
            </Suspense>
        </div>
    );
}
