// @ts-check
import React, { useEffect, useMemo } from "react";
import Layout from "../../components/layout";
import PostPage from "./postPage";
import Head from "next/head";
import { BUDGET_POSTS } from "../../public/data/text_data";

export default function Posts({allPostsData}) {
    
    return (
        <Layout isHome={true}>
            <p>post page</p>
        </Layout>
    )
}