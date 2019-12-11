import React, { Component } from 'react';
import '../../assets/lineChart/toolTip.css';

const ToolTip = (props) => {

    console.log(props)

    const {hoverLoc, activePoint} = props;

    // The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
    // getBoundingClientRect() takes four values left, top, width, height
    const svgLocation = document.getElementsByClassName("linechart")[0].getBoundingClientRect();
  
    let placementStyles = {};
    let width = 100;
    placementStyles.width = width + 'px';
    placementStyles.left = hoverLoc + svgLocation.left - (width/2);

    return (
        <div className='hover' style={ placementStyles }>
          <div className='date'>{ activePoint.d }</div>
          <div className='price'>{ activePoint.p }</div>
        </div>
    )
}


export default ToolTip;