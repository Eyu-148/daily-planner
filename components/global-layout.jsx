//@ts-check
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css'
import utilStyle from '../styles/utils.module.css'

const name = "Lilita";

/**
 * @typedef {{
 * children: React.ReactNode,
 * isHome?: boolean
 * }} Props
 * 
 * @type {React.FunctionComponent<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
*/
export default function Layout(props) {
    return (
        <>
            <div className={styles.container}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a personal website using Next.js"
                    />
                </Head>
                <header className={styles.header}>
                    <h1 className={`${utilStyle.headingLg} ${styles.headerHeading1}`}>Hello, {name}</h1>
                </header>
                <nav className={styles.nav}>
                    <ul className={styles.ul}>
                        <li className={styles.navLi}><Link href="/">Home</Link></li>
                        <li className={styles.navLi}><Link href="/budget">Budget</Link></li>
                        <li className={styles.navLi}><Link href="/posts">Daily Posts</Link></li>
                    </ul>
                </nav>
                <main className={styles.main}>{props.children}</main>
                <footer className={styles.footer}>Delivered by 坐着就是跟你唠</footer>
            </div>
        </>
    )
}