import Link from "next/link";
/**
 * @typedef {{
 *  name: string
 * }}
 * Props
 * 
 * @type React.FunctionComponent<Props>
 */
export default function NavBar({ name }) {

    return (
        <>
            <div id="greeting">
                <h3>Welcome, {name}</h3>
            </div>
            <nav id="nav-index">
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/pages/budget">Budget</Link>
                    </li>
                    <li>
                        <Link href="/pages/posts">Daily Posts</Link>
                    </li>
                </ol>
            </nav>
        </>
    );
}