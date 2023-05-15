// @ts-check
import React, { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import PostDetails from "../../../components/posts/post-detail";
import { BUDGET_POSTS } from "../../../public/data/text_data";
import PostPage from "../postPage";
import Head from "next/head";

export default function PostNotes() {
    const router = useRouter()
    const onNavigate = (url) => {
        router.push(url)
    }

    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>当天 - On that Day</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PostPage isDelete={false} />

            <div className="bg-blue-950/30 fixed overflow-auto bottom-0 top-0 right-0 left-0 z-10">
                <div className="flex flex-col mx-48 my-20 bg-white rounded-md py-10">
                    <div className="flex justify-between items-center">
                        <button 
                            className="ml-10 bg-transparent border-none p-1 before:content-close"
                            onClick={()=>onNavigate(`/posts`)} />
                        <button className="flex items-center justify-center bg-green-600 hover:bg-green-400
                                            border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                            ease-in-out duration-300 mr-10" 
                                            type="button" onClick={() => onNavigate(`/posts/add_budget`)}>
                            new
                        </button>
                    </div>

                    <div>
                        {BUDGET_POSTS.filter((post) => post.date === router.query.slug).map((post) => (
                            <div key={post.id}>
                                <PostDetails date={post.date} price={post.price} notes={post.notes} />
                            </div> 
                        ))}
                    </div>
                </div>
            </div>

        </Layout>
        </>
    )
}