import Image from "next/image";
import Link from "next/link";

const linkClass = "text-xl text-white hover:text-blue-700";

const navItems = [
    { path: "/posts/all", name: "All Posts" },
    { path: "/posts", name: "Your Posts" },
    { path: "/posts/new", name: "New Post" },
];

const Navbar = () => {
    return (
        <div className="flex justify-end py-4 px-3 items-center gap-10 bg-slate-700 relative">
            <Image
                src={"/favicon.ico"}
                alt="icon"
                width={30}
                height={30}
                className="absolute left-5"
            />
            {navItems.map((item) => (
                <Link key={item.name} href={item.path} className={linkClass}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
