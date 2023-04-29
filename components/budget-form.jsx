//@ts-check
import React, { useEffect, useRef } from "react";
import budgetStyle from '../styles/budget.module.css';

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
        <form className={budgetStyle.BudgetForm}>
            <button className={budgetStyle.budgetButton} type="submit">过去15天</button>
            <button className={budgetStyle.budgetButton} type="submit">过去1个月</button>
            <button className={budgetStyle.budgetButton} type="submit">过去3个月</button>
            <button className={budgetStyle.budgetButton} type="submit">过去6个月</button>
            <button className={budgetStyle.budgetButton} type="submit">过去一年</button>
        </form>
    );
}