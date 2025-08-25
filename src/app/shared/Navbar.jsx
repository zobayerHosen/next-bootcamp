import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className="flex items-center gap-10">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Navbar;