//@ts-check
import React, { useMemo } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import OnePost from "../../components/posts-onePost"
import { BUDGET_POSTS } from "../../public/data/text_data"
import DateInputBox from "../../components/input-date"
import InputFieldBudget from "../../components/input-budget-details"
import FormButton from "../../components/form-button"

// date, price, notes
export default function AddPost() {

    const router = useRouter()
    const postMap = new Map()

    const onNavigate = (url) => {
        router.push(url)
    }

    useMemo(() => {
        BUDGET_POSTS.forEach((post) => {
            if (!postMap.has(post.date)) {
                postMap.set(post.date, post.price)
            }
            else {
                postMap.set(post.date, postMap.get(post.date)+post.price)
            }
        })
    }, [postMap])
    
    return (
        <Layout isHome={false}>
        <Head>
            <title>Daily Details</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
            <button>
                New
            </button>
        </div>

        {Array.from(postMap).map(([key, val]) => (
            <button key={key} className="bg-postBtn-default border:none rounded-md shadow-md mx-0 my-4 w-4/5 h-1/3 ease-in-out duration-300">
                <OnePost date={key} price={val} 
                />
            </button>
        ))}

        <div className="bg-slate-800/30 fixed overflow-auto bottom-0 top-0 right-0 left-0 z-10">
            <div className="p-4 bg-white mt-20 mx-80">
                <div>
                    <button 
                        className= "px-3 bg-transparent border-2 border-black rounded-md p-1 float-right"
                        onClick={()=>onNavigate(`posts`)}>X</button>
                </div>
                <form className="mt-10">
                    <InputFieldBudget />
                    <div className="flex flex-row ml-36 mt-5">
                        <FormButton type="submit" />
                        <FormButton type="reset" />
                        <FormButton type="button" />
                    </div>
                </form>
                
            </div>
        </div>

    </Layout>
    )
}