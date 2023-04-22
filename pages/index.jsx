// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../components/global-layout";

export default function Home() {
    

    return (
        <>
        <Layout isHome={true}>
            <Head>
                <title>Daily Planner - a next app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1>There should be some text...</h1>
                <h1>There should be some text...</h1>
                <h1>There should be some text...</h1>
            </div>
        </Layout>
        </>
    )
}