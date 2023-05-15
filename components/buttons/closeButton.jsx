//@ts-check
/**
 * @typedef {{
* onNavigate:Function
* }} Props
* 
* @type {React.FC<Props>}
* @param {Props} props
* @return {React.ReactElement}
*/
import React from "react";


export default function CloseBtn(props) {
    return (
        <button 
            className= "px-3 bg-transparent border-2 border-black rounded-md p-1 float-right"
            onClick={()=>props.onNavigate(`posts`)}>X</button>
    )
}