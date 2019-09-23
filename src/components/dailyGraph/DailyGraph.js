import React from 'react'
import ItemGraph from '../graph/ItemGraph'
import Layout from '../layout/Layout';
import Color from '../../LayoutColor'


const DailyGraph = (props) => {


    return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <ItemGraph title={'Microsoft'} color={Color.dailyGraph}/>
                </div>
            </div>
        </Layout>
    )
}


export default DailyGraph;