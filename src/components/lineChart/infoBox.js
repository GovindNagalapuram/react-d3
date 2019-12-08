// cindesk API = https://api.coindesk.com/v1/bpi/historical/close.json

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

import React, { Component } from 'react';
import '../../assets/lineChart/infoBox.css';

const InfoBox = () => {
    return (
        <h1>this is info box container.</h1>
    )
}

export default InfoBox;