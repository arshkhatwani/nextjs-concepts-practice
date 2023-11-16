import Link from "next/link";

const linkClass = "text-xl text-white hover:text-blue-700";

const navItems = [
    { path: "/", name: "Home" },
    { path: "/posts", name: "Posts" },
    { path: "/posts/new", name: "New Post" },
];

const Navbar = () => {
    return (
        <div className="flex justify-end py-4 px-3 gap-10 bg-slate-700">
            {navItems.map((item) => (
                <Link key={item.name} href={item.path} className={linkClass}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
