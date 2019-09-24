import React from 'react'
import Chart from 'react-apexcharts'

let options = {
        chart: {
            zoom: {
                enabled: false
            }
        },
        stroke: {
            curve: 'straight'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 1
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    };
let series = [{
        name: "Microsoft",
        data: [10, 41, 35, 51, 100, 62, 69, 91, 200]
    },
    {
        name: "Apple",
        data: [50, 12, 50, 10, 100, 300, 50, 80, 125]
    }];


const ItemGraph = (props) => {


    return(
        <div className='graph-item'>
            <div className='graph-title'>
                <div className='graph-text'>{props.title}</div>
            </div>
            <div className='graph-content'>
                <Chart options={options} series={series} type="line" height={'245px'}/>
            </div>
        </div>
    )
}


export default ItemGraph;