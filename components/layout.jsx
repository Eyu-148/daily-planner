/**
 * @typedef {{
*  isHome: boolean
* }}
* Props
* 
* @type React.FunctionComponent<Props>
*/
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css'
import utilStyle from '../styles/utils.module.css'

const name = "Your Name";


export default function Layout({ children, isHome }) {
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
                    <h1 className={utilStyle.headingLg}>Hello, {name}</h1>
                </header>
                <nav className={styles.nav}>
                    <ol>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/budget">Budget</Link></li>
                        <li><Link href="/posts">Daily Posts</Link></li>
                    </ol>
                </nav>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>Delivered by 坐着就是跟你唠</footer>
            </div>
        </>
    )
}