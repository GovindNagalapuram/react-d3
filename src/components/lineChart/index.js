import React, { Component, useState, useEffect } from 'react';
import Moment from 'react-moment';
import LineChart from './lineChart';
import ToolTip from './toolTip';
import InfoBox from './infoBox';

const LineIndex = () => {

    const [ fetchingData, setFetchingData ] = useState(true);
    const [ data, setData ] = useState(null);
    const [ hoverLoc, setHoverLoc ] = useState(null);
    const [ activePoint, SetActivePoint ] = useState(null);

    const[add, setAdd] = useState(true);
    const[value, setValue] = useState(0);
    const[increment, setIncrement] = useState(1);
    const[end, setEnd] = useState(4)

    useEffect(() => {
        getData()
    }, [])
    

    // repeat the loop on increment number.
    const calculation = () => {
         if (add === true && value <= end) {
            setValue(value => value + increment)
            if (value === end) {
                setAdd(false)
            }
         }
         else {
            setAdd(false)
            setValue(value => value - increment)
            if (value === 1) {
                setAdd(true)
            }
        }
      }

    const getData = () => {
        const url = 'https://api.coindesk.com/v1/bpi/historical/close.json';
  
        fetch(url).then( r => r.json())
          .then((bitcoinData) => {
            const sortedData = [];
            let count = 0;
            for (let date in bitcoinData.bpi){
              sortedData.push({
                // d: Moment(date).format('MMM/DD'),
                d: date,
                p: bitcoinData.bpi[date].toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                x: count, //previous days
                y: bitcoinData.bpi[date] // numerical price
              });
              count++;
            }
            setData(sortedData)
            setFetchingData(false)
          })
          .catch((e) => {
            console.log(e);
          });
    }

    const handleChartHover = (hoverLoc, activePoint) => {
      setHoverLoc(hoverLoc)
      SetActivePoint(activePoint)
    }

    return(
        <div className="index-container" style={{textAlign: 'center'}}>
            {/* <div onClick={calculation}>{value}</div> */}
            <h1>Bitcoin price chart for 30 days</h1>
            { 
                !fetchingData?
                    <InfoBox data={data} />
                : null 
            }
            {
                !fetchingData ?
                  <LineChart
                      data={data}
                      onChartHover = {(a,b) => handleChartHover(a,b)}
                  />
                : null
            }
            {
              hoverLoc ? 
                <ToolTip
                  hoverLoc={hoverLoc}
                  activePoint={activePoint}
                />
                :
              null
            }
        </div>
    )
}

export default LineIndex;