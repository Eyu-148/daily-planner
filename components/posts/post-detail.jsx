//@ts-check
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

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
    const router = useRouter()

    const onNavigate = (url) => {
        router.push(url)
    } 
    return (
        <div className=" group bg-sky-50 hover:bg-sky-200 rounded-lg p-7
                        ease-in-out duration-300 mx-10 my-3
                        grid grid-rows-3 gap-3">
            <div className="flex justify-between items-center">
                <h4 className='font-xl text-base text-sky-700 pl-4'>{props.date}</h4>

                <button className="flex items-center justify-center bg-red-700 hover:bg-red-800
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                invisible group-hover:visible" 
                                    type="button" >
                    delete
                </button>
            </div>

            <h2 className='font-bold text-2xl text-sky-950 pl-5'>{props.price}</h2>
            <p className="pl-5 text-lg">{props.notes}</p>
        </div>
    )
}