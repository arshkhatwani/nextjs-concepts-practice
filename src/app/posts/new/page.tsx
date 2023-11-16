import Heading from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Post",
  description: "Add a new post",
};

export default function NewPost() {
  return <Heading>New Post</Heading>;
}
