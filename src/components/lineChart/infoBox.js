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
import Moment from 'react-moment';
import '../../assets/lineChart/infoBox.css';

const InfoBox = (props) => {

    const[currentPrice, setCurrentPrice] = useState(null);
    const[monthChangeD, setMonthChangeD] = useState(null);
    const[monthChangeP, setMonthChangeP] = useState(null);
    const[updatedAt, setUpdatedAt] = useState(null);

    // console.log(data);
    useEffect(() => {
        getData()
        const refresh = setInterval(getData(), 2000);
        return () => {
          clearInterval(refresh);
        }
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
            console.log('changes')
          })
          .catch((e) => {
            console.log(e);
          });
      }

    return (
          <div id="data-container">
          { currentPrice ?
            <div id="left" className='box'>
              <div className="heading">{currentPrice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}</div>
              {/* <div className="subtext">{'Updated ' + Moment(updatedAt ).fromNow()}</div> */}
            </div>
          : null
          }
          { currentPrice ?
            <div id="middle" className='box'>
              <div className="heading">{monthChangeD}</div>
              <div className="subtext">Change Since Last Month (USD)</div>
            </div>
          : null
          }
            <div id="right" className='box'>
              <div className="heading">{monthChangeP}</div>
              <div className="subtext">Change Since Last Month (%)</div>
            </div>

        </div>

    )
}

export default InfoBox;