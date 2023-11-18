import { getPost } from "../action";

type Props = {
    params: {
        id: string;
    };
};

export default async function Post({ params }: Props) {
    const { id } = params;
    const post = await getPost(id);
    console.log(post);

    if (!post) {
        return (
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-center mb-10 font-semibold text-gray-500">
                    Post not found
                </h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center">
            <h1 className="text-4xl text-center mb-10 font-semibold">
                {post.title}
            </h1>

            <p className="text-2xl font-medium">{post.description}</p>
        </div>
    );
}
