//@ts-check
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/layout.module.css'
import utilStyle from '../styles/utils.module.css'

const name = "曹";

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
            <div className="grid gap-5 grid-rows-7 m-10 mx-40">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="description"
                        content="Learn how to build a simple website using Next.js/tailwind CSS/MongoDB"
                    />
                </Head>
                <header className='border-b-4 border-blue-500 py-3'>
                    <h1 className='font-bold text-3xl float-right' >Hello, {name}</h1>
                </header>
                <nav >
                    <ul className='flex items-center justify-center space-x-5'>
                        <li className='flex items-center justify-center bg-blue-500 hover:bg-white rounded-md text-white hover:text-blue-500 
                                       py-2 px-4 border-2 border-transparent hover:border-blue-500
                                       ease-in-out duration-300'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex items-center justify-center bg-blue-500 hover:bg-white rounded-md text-white hover:text-blue-500 
                                       py-2 px-4 border-2 border-transparent hover:border-blue-500
                                       ease-in-out duration-300'>
                                        <Link href="/budget/">Budget View</Link>
                        </li>
                        <li className='flex items-center justify-center bg-blue-500 hover:bg-white rounded-md text-white hover:text-blue-500 
                                       py-2 px-4 border-2 border-transparent hover:border-blue-500
                                       ease-in-out duration-300'>
                            <Link href="/posts/">Budget Details</Link>
                        </li>
                    </ul>
                </nav>
                <main className='my-5 mx-7'>{props.children}</main>
                <footer className='flex items-center justify-center space-x-5 border-t-2 border-orange-400 py-2'>
                    @Copyrigh2023<i>坐着就是跟你唠</i>, 个人学习项目
                </footer>
            </div>
        </>
    )
}