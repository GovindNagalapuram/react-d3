import React, { Component } from 'react';
// import moment from 'moment';
import LineChart from './lineChart';
import ToolTip from './toolTip';
import InfoBox from './infoBox';

const LineIndex = () => {
    return(
        <div className="index-container">
            <LineChart/>
            <ToolTip/>
            <InfoBox/>
        </div>
    )
}

export default LineIndex;