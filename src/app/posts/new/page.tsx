import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "New Post",
    description: "Add a new post",
};

export default function NewPost() {
    return (
        <form className="w-5/6">
            <Heading>New Post</Heading>

            <div className="my-8 flex flex-col justify-center gap-6">
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="text-3xl bg-transparent"
                />
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    className="text-3xl bg-transparent"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="px-3 py-2 bg-black text-white hover:bg-gray-500 hover:cursor-pointer">
                    Submit
                </button>
            </div>
        </form>
    );
}
