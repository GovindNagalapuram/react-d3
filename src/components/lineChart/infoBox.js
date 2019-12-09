// coindesk API = https://api.coindesk.com/v1/bpi/historical/close.json

// The API returns an object that looks like this:
//   “bpi”: {
//     “2017–06–24”: 2619.1188,
//     ”2017–06–25": 2594.4538,
//     ”2017–06–26": 2485.3588,
//     ”2017–06–27": 2593.17,
//     ”2017–06–28": 2584.5638,
//     // ...
//   }
// }

import React, { Component, useState, useEffect } from 'react';
import '../../assets/lineChart/infoBox.css';

const InfoBox = (props) => {

    const[currentPrice, setCurrentPrice] = useState(null);
    const[monthChangeD, setMonthChangeD] = useState(null);
    const[monthChangeP, setMonthChangeP] = useState(null);
    const[updatedAt, setUpdatedAt] = useState(null);

    // console.log(data);
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        const {data} = props;
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  
        fetch(url).then(r => r.json())
          .then((bitcoinData) => {
            const price = bitcoinData.bpi.USD.rate_float;
            const change = price - data[0].y;
            const changeP = (price - data[0].y) / data[0].y * 100;
            
            setCurrentPrice(bitcoinData.bpi.USD.rate_float)
            setMonthChangeD(change.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }))
            setMonthChangeP(changeP.toFixed(2) + '%')
            setUpdatedAt(bitcoinData.time.updated)
          })
          .catch((e) => {
            console.log(e);
          });
      }

    return (
        <div>
            <h1>this is info box container.</h1>
            {currentPrice}
            {monthChangeD}
            {monthChangeP}
            {updatedAt}
        </div>

    )
}

export default InfoBox;