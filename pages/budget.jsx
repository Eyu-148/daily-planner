// @ts-check
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

export default function Budget() {
    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Planner - Budget</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Daily Budget </h1>
        </Layout>
        </>
    )
}