//@ts-check
import React, { useEffect, useRef } from "react";
import utilStyles from '../styles/utils.module.css'
import postStyles from '../styles/posts.module.css';

/**
 * component to display a chart, data sending from server
 * @typedef {{
 * id: number,
 * date: string,
 * price: number,
 * notes: string
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
**/

export default function OnePost(props) {

    return (
        <div className={postStyles.postContainer}>
            <div className={postStyles.postInfo}>
                <h4 className={postStyles.postDate}>{props.date}</h4>
                <h2 className={`${utilStyles.headingLg} ${postStyles.postPrice}`}>{props.price}</h2>
            </div>
            <p className={postStyles.postDetails}>{props.notes}</p>
        </div>
    );
}