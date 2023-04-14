import Link from "next/link";

export default function NavBar() {

    return (
        <nav id="nav-index">
            <ol>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/budget">Budget</Link></li>
                <li><Link href="/posts">Daily Posts</Link></li>
            </ol>
        </nav>
    );
}