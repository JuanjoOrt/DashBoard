import React from 'react'
import { Line } from 'react-chartjs-2';

const ItemGraph = (props) => {


    return(
        <div className='graph-item' style={{backgroundColor: props.color}}>
            <div className='graph-title'>
                <div className='graph-text'>{props.title}</div>
            </div>
            <div className='graph-content'>
                <Line></Line>
            </div>
        </div>
    )
}


export default ItemGraph;