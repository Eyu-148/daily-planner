import React from "react"
const {MongoClient} = require('mongodb')

//@ts-check
/**
 * @typedef {{
 * req:import("next").NextApiRequest,
 * res:import("next").NextApiResponse,
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
 */

export default async function AddPostHandler(props) {
    if (props.req.method !== 'POST') return
    
    const { date, price, notes } = props.req.body
    if (!date || !price || !notes) return

    var db = null
    const client = await MongoClient.connect(
        'mongodb+srv://admin:admin@nextjs-budget-pages0.gxmofuc.mongodb.net/?retryWrites=true&w=majority'
    ).then(()=>{
        console.log("Connected.")
        db = client.db()
    }).catch((err)=>{
        console.error(err)
    })

    // 似乎可以改进-错误信息输出
    const postsCollection = db.collection('posts')
    const results = postsCollection.insertOne({ date, price, notes })
    client.close()
    
    props.res.status(201).json({
        post: results,
        message: "Added."
    })
}