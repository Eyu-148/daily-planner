// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../components/global-layout";
import OnePost from "../components/posts-onePost";

export default function Posts() {
    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Planner - Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <OnePost date="2023-09-23" isPay={true} price={300} details="for dev testing" />
        </Layout>
        </>
    )
}