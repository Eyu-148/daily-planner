//@ts-check
import React, { useEffect, useRef } from "react";
import utilStyles from '../styles/utils.module.css'
import postStyles from '../styles/posts.module.css';

/**
 * component to display a chart, data sending from server
 * @typedef {{
 * date: string,
 * price: number,
 * notes: string,
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
**/

export default function PostDetails(props) {
    return (
        <div className={postStyles.postDetails}>
            <h4 className={postStyles.postDate}>{props.date}</h4>
            <h2 className={`${utilStyles.headingLg} ${postStyles.postPrice}`}>{props.price}</h2>
            <p>{props.notes}</p>
        </div>
    )
}