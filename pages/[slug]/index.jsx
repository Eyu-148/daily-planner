// @ts-check
import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import OnePost from "../../components/posts-onePost";
import PostDetails from "../../components/post-detail";
import postStyles from '../../styles/posts.module.css';

// some dumb data
const BUDGET_POSTS = [
    {
        id: 1,
        date: '2023-5-5',
        price: -50,
        notes: "sunflower swimming suit~"
    },
    {
        id: 2,
        date: '2023-5-5',
        price: 200,
        notes: "卖了条裙子^-^"
    },
    {
        id: 3,
        date: '2023-5-7',
        price: -15,
        notes: "boba tea"
    }
]


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
                <button key={key} className={postStyles.postBtn}>
                    <OnePost date={key} price={val} 
                    />
                </button>
            ))}

            <div className={postStyles.post}>
                <div className={postStyles.postPage}>
                    <div>
                        <button onClick={()=>onNavigate(`posts`)}>X</button> 
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