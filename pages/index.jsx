// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
    return (
        <>
        <Layout isHome={true}>
            <Head>
                <title>Daily Planner - a next app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <p>Hello, next.js!</p>
            </div>
        </Layout>
        </>
    )
}