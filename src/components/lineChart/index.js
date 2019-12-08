import React, { Component, useState } from 'react';
import LineChart from './lineChart';
import ToolTip from './toolTip';
import InfoBox from './infoBox';

const LineIndex = () => {

    const [ fetchingData, setFetchingData ] = useState(true);
    const [ data, setData ] = useState(null);
    const [ hoverLoc, setHoverLoc ] = useState(null);
    const [ activePoint, SetActivePoint ] = useState(null);

    return(
        <div className="index-container">
            <h1>Bitcoin price chart for 30 days</h1>
            .row
            <LineChart/>
            <ToolTip/>
            <InfoBox/>
        </div>
    )
}

export default LineIndex;