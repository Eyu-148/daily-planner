// @ts-check
import React, { useEffect, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import OnePost from "../../components/posts/posts-onePost";
import { BUDGET_POSTS } from "../../public/data/text_data";

/**
 * @typedef {{
* isDelete:boolean
* }} Props
* 
* @type {React.FC<Props>}
* @param {Props} props
* @return {React.ReactElement}
**/


// post页面初始样式，也是其他相关页面的背景
export default function PostPage(props) {
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
                postMap.set(post.date, Number.parseFloat(postMap.get(post.date)+post.price).toFixed(2))
            }
            // 如下行，若直接对DOM进行操作，网页就可以显示
            //document.querySelector('p').innerHTML = `${post.date}: ${post.price}`
        })
    }, [postMap])
    
    return (
        <>
        {props.isDelete ? 
        <div className="flex flex-col ml-7">
            <div className="flex flex-row-reverse space-x-reverse space-x-4">
            <button className="flex items-center justify-center bg-green-600 hover:bg-green-400
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                ease-in-out duration-300" 
                                type="button" onClick={() => onNavigate(`/posts`)}>
                cancel
            </button>
            <button className="flex items-center justify-center bg-red-700 hover:bg-red-800
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                ease-in-out duration-300" 
                                type="button" >
                delete
            </button>
            </div>

            <div className="grid gap-7 grid-cols-2 my-3">
            {Array.from(postMap).map(([key, val]) => (
                <button type="button" 
                        key={key} 
                        onClick={() => onNavigate(`posts/${key}`)} 
                        className="bg-sky-300 hover:bg-sky-200 rounded-lg p-7
                                    ease-in-out duration-300 flex flex-row items-center justify-center space-x-5">
                <OnePost 
                    date={key} 
                    price={val} 
                />
                </button>
            ))}
            </div>
        </div> : 
        <div className="flex flex-col ml-7">
            <div className="flex flex-row-reverse space-x-reverse space-x-4">
            <button className="flex items-center justify-center bg-green-600 hover:bg-green-400
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                ease-in-out duration-300" 
                                type="button" onClick={() => onNavigate(`posts/add_budget`)}>
                new
            </button>
            <button className="flex items-center justify-center bg-red-700 hover:bg-red-800
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                ease-in-out duration-300" 
                                type="button" onClick={() => onNavigate(`posts/delete`)}>
                delete
            </button>
            </div>

            <div className="grid gap-7 grid-cols-2 my-3">
            {Array.from(postMap).map(([key, val]) => (
                <button type="button" 
                        key={key} 
                        onClick={() => onNavigate(`posts/${key}`)} 
                        className="bg-sky-300 hover:bg-sky-200 rounded-lg p-7
                                    ease-in-out duration-300 flex flex-row items-center justify-center space-x-5">
                <OnePost 
                    date={key} 
                    price={val} 
                />
                </button>
            ))}
            </div>
        </div>
    }
        </>
    )
}