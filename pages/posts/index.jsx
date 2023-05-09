// @ts-check
import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import OnePost from "../../components/posts-onePost";
import postStyles from '../../styles/posts.module.css';
import { BUDGET_POSTS } from "../../public/data/text_data";


export default function Posts() {
    const router = useRouter()
    const postMap = new Map()

    const onNavigate = (url) => {
        router.push(url)
    }

    // useMemo()会缓存postMap，所以每次渲染页面时postMap不会更新，除非postMap内部的状态发生了变化
    // 节省性能：因为父组件Posts不更新，因此子组件也不会更新
    // 实例：在/posts和/[slug]中切换时，组件OnePost中的价格不会增加，只有在postMap变化时才变化
    // 注：这里使用useEffect()无效，因为useEffect()在DOM渲染/更新之后才触发，此时网页已渲染完毕
    // 而方法中并没有直接对dom进行操作
    useMemo(() => {
        BUDGET_POSTS.forEach((post) => {
            if (!postMap.has(post.date)) {
                postMap.set(post.date, post.price)
            }
            else {
                postMap.set(post.date, postMap.get(post.date)+post.price)
            }
            // 如下行，若直接对DOM进行操作，网页就可以显示
            //document.querySelector('p').innerHTML = `${post.date}: ${post.price}`
        })
    }, [postMap])
    
    return (
        <>
        <Layout isHome={false}>
            <Head>
                <title>Daily Planner - Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <button type="button" onClick={() => onNavigate(`add_budget`)}>
                    New
                </button>
            </div>
            {Array.from(postMap).map(([key, val]) => (
                <button type="button" 
                        key={key} 
                        onClick={() => onNavigate(`${key}`)} 
                        className="bg-postBtn-default border:none rounded-md shadow-md mx-0 my-4 w-4/5 h-1/3 ease-in-out duration-300">
                <OnePost 
                    date={key} 
                    price={val} 
                />
                </button>
            ))}

        </Layout>
        </>
    )
}