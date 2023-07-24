// @ts-check
import React, { useEffect, useMemo } from "react";
import Layout from "../../components/layout";
import PostPage from "./postPage";
import Head from "next/head";
import { BUDGET_POSTS } from "../../public/data/text_data";

export async function getStaticProps() {
    const allPostsData = BUDGET_POSTS
    return {
      props: {
        allPostsData,
      },
    };
  }

export default function Posts({allPostsData}) {
    
    return (
        <Layout isHome={true}>
            <Head>
                <title>Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PostPage isDelete={false} postsData={allPostsData} />
        </Layout>
    )
}