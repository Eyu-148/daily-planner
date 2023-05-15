// @ts-check
import React, { useEffect, useMemo } from "react";
import Layout from "../../components/layout";
import PostPage from "./postPage";
import Head from "next/head";


export default function Posts() {
    
    return (
        <Layout isHome={true}>
            <Head>
                <title>Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PostPage isDelete={false} />
        </Layout>
    )
}