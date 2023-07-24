//@ts-check
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

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
    const [isEdit, setEdit] = useState(false)
    const router = useRouter()
    const onNavigate = (url) => {
        router.push(url)
    }

    const handleEdit = () => {
        setEdit(true)
    }
    const handleCancel = () => {
        setEdit(false)
    }

    return (
        isEdit ? 
        <div className="bg-sky-5 rounded-lg p-7
                        ease-in-out duration-300 
                        grid">
            <div className="flex flex-col ml-5">
                <div className="flex flex-auto focus-within:font-bold">
                    <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-400">date</label>
                    <input type="date" name="date" defaultValue={props.date} className="ml-10 px-3 border-2 border-gray-300 rounded-md" required />
                </div>

                <div className="flex flex-auto mt-5 focus-within:font-bold">
                    <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-300">price</label>
                    <input type="number" name="price" defaultValue={props.price} className="ml-9 px-3 border-2 border-gray-300 rounded-md" required />
                </div>

                <div className="flex flex-auto mt-5 focus-within:font-bold">
                    <label className="px-2 block uppercase text-slate-900 border-4 border-transparent border-l-blue-300">Notes</label>
                    <textarea name="textarea"  className="ml-7 px-3 border-2 border-gray-300 rounded-md" 
                            rows={3} cols={50}
                            defaultValue={props.notes}
                            spellCheck required />
                </div>
            </div>

            <div className="flex flex-row space-x-3 items-center justify-center mt-3">
                <button className="flex items-center justify-center bg-red-700 hover:bg-red-800
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100" 
                        type="button" 
                        >
                    confirm
                </button>

                <button className="flex items-center justify-center bg-green-500 hover:bg-green-400
                                border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100" 
                        type="button"
                        onClick={handleCancel} >
                    cancel
                </button>
            </div>

        </div>
        :
        <div className=" group bg-sky-50 hover:bg-sky-200 rounded-lg p-7
                        ease-in-out duration-300 mx-10 my-3
                        grid grid-rows-3 gap-3">
            <div className="flex justify-between items-center">
                <h4 className='font-xl text-base text-sky-700 pl-4'>{props.date}</h4>

                <div className="flex flex-row space-x-3">
                    <button className="flex items-center justify-center bg-green-500 hover:bg-green-400
                                    border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                    invisible group-hover:visible" 
                            type="button" 
                            onClick={handleEdit}>
                        edit
                    </button>

                    <button className="flex items-center justify-center bg-red-700 hover:bg-red-800
                                    border-2 border-transparent px-5 py-2 rounded-md font-bold text-stone-100
                                    invisible group-hover:visible" 
                            type="button" >
                        delete
                    </button>
                </div>
            </div>

            <h2 className='font-bold text-2xl text-sky-950 pl-5'>{props.price}</h2>
            <p className="pl-5 text-lg">{props.notes}</p>
        </div>
    )
}