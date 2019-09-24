import React, {Suspense} from 'react'



const ItemGraph = (props) => {


    return(
        <div className='graph-item'>
            <div className='graph-title'>
                <div className='graph-text'>{props.title}</div>
            </div>
            <div className='graph-content'>
                {
                    (props.dataDaily === null)
                    ? <div> Cargando... </div>
                    : <div> DONE </div>
                }
            </div>
        </div>
    )
}


export default ItemGraph;