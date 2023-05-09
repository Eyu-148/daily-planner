// @ts-check
import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import OnePost from "../../components/posts-onePost";
import PostDetails from "../../components/post-detail";
import postStyles from '../../styles/posts.module.css';
import { BUDGET_POSTS } from "../../public/data/text_data";

export default function PostNotes() {
    const router = useRouter()
    const postMap = new Map()

    const onNavigate = (url) => {
        router.push(url)
    }

    useMemo(() => {
        BUDGET_POSTS.forEach((post) => {
            if (!postMap.has(post.date)) {
                postMap.set(post.date, post.price)
            }
            else {
                postMap.set(post.date, postMap.get(post.date)+post.price)
            }
        })
    }, [postMap])

    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button>
                    New
                </button>
            </div>

            {Array.from(postMap).map(([key, val]) => (
                <button key={key} className="bg-postBtn-default border:none rounded-md shadow-md mx-0 my-4 w-4/5 h-1/3 ease-in-out duration-300">
                    <OnePost date={key} price={val} 
                    />
                </button>
            ))}

            <div className="bg-slate-800/30 fixed overflow-auto bottom-0 top-0 right-0 left-0 z-10">
                <div className="p-8 mt-15">
                    <div>
                        <button 
                            className="ml-10 bg-transparent border-none p-1 before:content-close"
                            onClick={()=>onNavigate(`posts`)} />
                    </div>
                    {BUDGET_POSTS.filter((post) => post.date === router.query.slug).map((post) => (
                        <div key={post.id}>
                            <PostDetails date={post.date} price={post.price} notes={post.notes} />
                        </div> 
                    ))}
                </div>
            </div>

        </Layout>
        </>
    )
}