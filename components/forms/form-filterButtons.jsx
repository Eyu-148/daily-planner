//@ts-check
import React, { useEffect, useRef } from "react";
import budgetStyle from '../../styles/budget.module.css';

/**
 * component to display a chart, data sending from server
 * @typedef {{
 *   title: string,
 *   xData: string[],
 *   seriesData: number[],
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @return {React.ReactElement}
**/
export default function BudgetForm() {
    return (
        <form className='flex flex-row space-x-4 items-center justify-center'>
            <button className='flex items-center justify-center bg-orange-200 hover:bg-orange-100 rounded-md
                                       py-2 px-4 border-2 border-transparent hover:border-orange-400
                                       ease-in-out duration-300' type="submit">
                过去15天
            </button>
            <button className='flex items-center justify-center bg-orange-200 hover:bg-orange-100 rounded-md
                                       py-2 px-4 border-2 border-transparent hover:border-orange-400
                                       ease-in-out duration-300' type="submit">
                过去1个月
            </button>
            <button className='flex items-center justify-center bg-orange-200 hover:bg-orange-100 rounded-md
                                       py-2 px-4 border-2 border-transparent hover:border-orange-400
                                       ease-in-out duration-300' type="submit">
                过去3个月
            </button>
            <button className='flex items-center justify-center bg-orange-200 hover:bg-orange-100 rounded-md
                                       py-2 px-4 border-2 border-transparent hover:border-orange-400
                                       ease-in-out duration-300' type="submit">
                过去6个月
            </button>
            <button className='flex items-center justify-center bg-orange-200 hover:bg-orange-100 rounded-md
                                       py-2 px-4 border-2 border-transparent hover:border-orange-400
                                       ease-in-out duration-300' type="submit">
                过去一年
            </button>
        </form>
    );
}