//@ts-check
import React, { useEffect, useRef } from "react";
import utilStyles from '../styles/utils.module.css'
import postStyles from '../styles/posts.module.css';

/**
 * component to display a chart, data sending from server
 * @typedef {{
 * date: string,
 * isPay: boolean,
 * price: number,
 * details: string
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
**/

export default function OnePost(props) {
    const operation = (props.isPay) ? "支出" : "收入";

    return (
        <div className={postStyles.postContainer}>
            <h4 className={postStyles.postDate}>{props.date}</h4>
            <h1 className={`${utilStyles.headingLg} ${postStyles.postOperation}`}>{operation}</h1>
            <h2 className={`${utilStyles.headingMd} ${postStyles.postPrice}`}>{props.price}</h2>
            <p className={postStyles.postDetails}>{props.details}</p>
        </div>
    );
}