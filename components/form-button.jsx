//@ts-check
/**
 * @typedef {{
* type:string,
* }} Props
* 
* @type {React.FunctionComponent<Props>}
* @param {Props} props
* @return {React.ReactElement}
*/
import React from "react";

export default function FormButton(props) {
    return (
        <button type={props.type} className="mx-5 border-2 border-green-400 rounded-md px-3 py-2 uppercase 
                                           hover:bg-green-400 hover:text-white">
            {props.type==="button"? "add more":props.type}
        </button>
    )
}