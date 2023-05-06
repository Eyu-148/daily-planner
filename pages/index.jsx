// @ts-check
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
    

    return (
        <>
        <Layout isHome={true}>
            <Head>
                <title>Budget Manager-a next app</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Image src={"/../public/Images/premium_photo-1665657351698-7d61f4b57ddc.webp"}
                       alt={"a table topped with a vase and a net"}
                       width={500}
                       height={400} />
            </div>
        </Layout>
        </>
    )
}