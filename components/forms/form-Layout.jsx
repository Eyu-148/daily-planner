//@ts-check
import React, { useMemo, useRef, useState } from "react";
import InputFieldBudget from "../input-boxes/input-budget-details";
import FormButton from "./form-button";
/**
 * @typedef {{
* inputboxCnt:number,
* }} Props
* 
* @type {React.FC<Props>}
* //@param {Props} props
* @return {React.ReactElement}
*/

export default function FormLayout() {
    let inputRef = useRef(0) // 使用useRef()监听按钮点击次数->要渲染多少输入框
    const [inputs, setInputs] = useState([]) // 使用useState()记录更新后的输入框表
    // useRef()不会重新渲染页面，useState()会重新渲染页面

    const handleButton = () => {
        inputRef.current++
        setInputs([...inputs, <InputFieldBudget key={inputRef.current} id={inputRef.current}/>])
        console.log(inputs)
    }


    return (
        <form method="post" className="mt-10">
            <div>{ inputs }</div>
            <div className="flex flex-row ml-36 mt-5">
                <button type='submit' className="mx-5 border-2 border-green-400 rounded-md px-3 py-2 uppercase 
                                            hover:bg-green-400 hover:text-white">
                    submit
                </button>
                <button type='reset' className="mx-5 border-2 border-green-400 rounded-md px-3 py-2 uppercase 
                                            hover:bg-green-400 hover:text-white">
                    reset
                </button>
                <button type='button' className="mx-5 border-2 border-green-400 rounded-md px-3 py-2 uppercase 
                                            hover:bg-green-400 hover:text-white"
                        onClick={handleButton}>
                    add more
                </button>
            </div>
        </form>
    )
}