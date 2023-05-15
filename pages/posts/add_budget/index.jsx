//@ts-check
import React, { useMemo } from "react"
import { useRouter } from "next/router"
import Layout from "../../../components/layout"
import { BUDGET_POSTS } from "../../../public/data/text_data"
import FormLayout from "../../../components/forms/form-Layout"
import PostPage from "../postPage"
import Head from "next/head"

// date, price, notes
export default function AddPost() {
    const router = useRouter()
    const onNavigate = (url) => {
        router.push(url)
    }

    return (
        <Layout isHome={false}>
            <Head>
                <title>Add a Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PostPage isDelete={false} />

            <div className="bg-blue-950/30 fixed overflow-auto bottom-0 top-0 right-0 left-0 z-10">
                <div className="flex flex-col mx-48 my-20 bg-white rounded-md py-10">
                    <div>
                        <button 
                            className="ml-10 bg-transparent border-none p-1 before:content-close"
                            onClick={()=>onNavigate(`/posts`)} />
                    </div>
                    <div>
                        <FormLayout />
                    </div>
                </div>
            </div>

        </Layout>
    )
}