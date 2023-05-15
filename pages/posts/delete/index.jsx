// @ts-check
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import PostDetails from "../../../components/posts/post-detail";
import { BUDGET_POSTS } from "../../../public/data/text_data";
import PostPage from "../postPage";
import Head from "next/head";

export default function PostDeletion() {
    const router = useRouter()
    const onNavigate = (url) => {
        router.push(url)
    }

    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Delete</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PostPage isDelete={true} />

        </Layout>
        </>
    )
}