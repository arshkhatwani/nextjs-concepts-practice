import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts",
};

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}
