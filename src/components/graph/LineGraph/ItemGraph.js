import React from 'react'
import Chart from 'react-apexcharts';



const ItemGraph = (props) => {


    return(
        <div className='graph-item'>
            {console.log(props)}
            <div className='graph-title'>
                <div className='graph-text'>{props.title}</div>
            </div>
            <div className='graph-content'>
                {
                    (props.dataAppleDaily === null)
                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                    : <Chart options={props.dataAppleDaily.options} series={props.dataAppleDaily.series} type="line" height={'340px'}/>
                }
            </div>
        </div>
    )
}


export default ItemGraph;