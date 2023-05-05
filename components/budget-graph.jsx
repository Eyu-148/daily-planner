//@ts-check
import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import chartStyles from '../styles/budget.module.css'

/**
 * component to display a chart, data sending from server
 * @typedef {{
 *   title: string,
 *   xData: string[],
 *   seriesData: number[],
 * }} Props
 * 
 * @type {React.FC<Props>}
 * @param {Props} props
 * @return {React.ReactElement}
**/
export default function BudgetGraph(props) {
    const graphRef = useRef();
    // re-render when props change
    useEffect(()=>{
        const chart = echarts.init(graphRef.current);
        let option = {
            title: {
                text: props.title,
            }, 
            xAxis: {
                type: 'category',
                name: '日期',
                data: props.xData, 
            },
            yAxis: {
                type: 'value',
                name: '支出',
            },
            series: [
                {
                    data: props.seriesData,
                    type: 'line',
                },
            ],
        };

        chart.setOption(option);
    },[props]);

    return <div ref={graphRef} id="budget-chart1" style={{width: 650, height: 450}}></div>;
}