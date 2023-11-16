interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
