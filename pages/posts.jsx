// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function Posts() {
    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Planner - Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Your Posts</h1>
        </Layout>
        </>
    )
}