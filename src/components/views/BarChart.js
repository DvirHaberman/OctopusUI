import React, { Component, Fragment } from 'react';
import Chart from "chart.js";
import classes from './BarChart.module.css';
// import classes from "./LineGraph.module.css";

export default class BarChart extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
                type: 'horizontalBar',
                data: {
                    datasets: [{
                        label: 'Active Nets',
                        data: [20, 20, 30, 40,  50, 60],
                        backgroundColor: 'red'
                    }, {
                        label: 'Avaliable Nets',
                        data: [50, 50, 50, 50, 50, 60],
                        backgroundColor: 'blue'
                    }],
                    labels: ['SITE1', 'SITE2', 'SITE3', 'SITE4','SITE3', 'SITE4']
                },
                options: {
                    // legend{
                    //     fontColor: 'white'
                    // },
                    margin: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    responsive:true,
                    maintainAspectRatio: false,
                    labels: {
                        fontColor: 'blue'
                    },
                    scales: {
                        xAxes: [{
                            ticks: {
                                min: 0,
                                fontColor: 'black'
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                min: 0,
                                fontColor: 'black'
                            }
                        }],
                    }
                }
            });
    }
    render() {
        return (
            <div className={classes.BarChartContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                    // width="200px"
                    // height="300px"
                />
            </div>
        )
    }
}