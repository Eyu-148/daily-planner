// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import OnePost from "../../components/posts-onePost";

// some dumb data
const BUDGET_POSTS = [
    {
        id: 1,
        date: '2023-5-5',
        price: -300,
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

export default function Posts() {
    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Planner - Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button>
                    New
                </button>
            </div>
            {BUDGET_POSTS.map((post) => (
                <div key={post.id}>
                <OnePost 
                    id={post.id} 
                    date={post.date} 
                    price={post.price} 
                    notes={post.notes}
               />
            </div>
            )
            )}
        </Layout>
        </>
    )
}