//@ts-check
import React from "react";
/**
 * @typedef {{
* btnType:string,
* }} Props
* 
* @type {React.FC<Props>}
* @param {Props} props
* @return {React.ReactElement}
*/

export default function FormButton(props) {
    return (
        <button type={props.btnType} className="mx-5 border-2 border-green-400 rounded-md px-3 py-2 uppercase 
                                           hover:bg-green-400 hover:text-white">
            {props.btnType==="button"? "add more":props.btnType}
        </button>
    )
}