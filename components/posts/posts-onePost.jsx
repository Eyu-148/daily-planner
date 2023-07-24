//@ts-check
import React, { useEffect, useRef } from "react";

/**
 * component to display a chart, data sending from server
 * @typedef {{
 * date: string,
 * price: number,
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
**/

export default function OnePost(props) {

    return (
        <>
            <h4 className='font-medium text-base text-sky-700'>{props.date}</h4>
            <h2 className='font-bold text-2xl text-sky-950'>{props.price}</h2>
        </>
    );
}