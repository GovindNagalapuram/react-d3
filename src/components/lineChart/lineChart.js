// functions to use making a line chart in a single svg(scalable vector graph) element.

// this.makeAxis()         Makes Graph Axis
// this.makePath()         Makes Graph Line
// this.makeArea()         Makes Shaded Graph Area (under line)
// this.makeLabels()       Makes Graph Labels
// this.getCoords(e)       When Hovered Gets Coords of Hover
// this.createLine()       When Hovered Makes Vertical Line
// this.makeActivePoint()  When Hovered Finds Closest Point
// this.stopHover()        Clears Line and Point When Hover Stops

import React, { Component } from 'react';

import '../../assets/lineChart/lineChart.css';


const LineChart = () => {
    return (
        <h1>this is line-chart container.</h1>
    )
}

export default LineChart;