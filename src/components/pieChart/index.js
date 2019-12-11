import React, { useState } from 'react';
import * as d3 from "d3";
import PieChart from './pieChart';

const PieIndex = () => {

    const generateData = (value, length = 5) =>
        d3.range(length).map((item, index) => ({
            date: index,
            value: value === null || value === undefined ? Math.random() * 100 : value
    }));

    const [data, setData] = useState(generateData())

    const changeData = () => {
        setData(generateData())
    } 

    return(
        <div className="container">
            <h1>Pie-chart</h1>
            <PieChart
                data = {data}
                width= {400}
                height= {300}
                innerRadius= {60}
                outerRadius = {150}
            />
                        <button onClick={changeData}>Click to get random data</button>
        </div>
    )
}

export default PieIndex;

