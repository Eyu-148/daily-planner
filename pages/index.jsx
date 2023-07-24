// @ts-check
import React, { useMemo, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import BudgetGraph from "../components/budget-graph";
import BudgetForm from "../components/forms/form-filterButtons";
import { BUDGET_POSTS } from "../public/data/text_data";

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");

        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { movies: JSON.parse(JSON.stringify(movies)) },
        };
    } catch (e) {
        console.error(e);
    }
}

export default function Budget({allPostsData}) {
    let xData = []
    let yData = []
    let postMap = new Map()
    
    useMemo(()=>{
        allPostsData.forEach((post) => {
            if (!postMap.has(post.date)) {
                postMap.set(post.date, post.price)
            }
            else {
                postMap.set(post.date, Number.parseFloat(postMap.get(post.date)+post.price).toFixed(2))
            }
        })
        Array.from(postMap).map(([key, val]) => (
            xData.push(key),
            yData.push(val)
        ))
    }, [postMap])

    // test dataset
    const lineChartData = {
        //折线图模拟数据
        xData: xData,
        seriesData: yData,
    };
    let graphTitle = 'test chart';

    return (
        <Layout isHome={false}>
            <Head>
                <title>HOME</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex flex-col items-center justify-center space-x-5 my-3'>
                <BudgetGraph
                    title={graphTitle} 
                    xData={lineChartData.xData} 
                    seriesData={lineChartData.seriesData}
                />
                <BudgetForm />
            </div>
        </Layout>
    )
}