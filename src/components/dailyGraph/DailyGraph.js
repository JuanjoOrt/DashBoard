import React, {useEffect} from 'react'
import ItemGraph from '../graph/ItemGraph'
import Layout from '../layout/Layout';
import Color from '../../LayoutColor'


const DailyGraph = (props) => {

    useEffect(() => {
        props.fetchData('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo')
    }, []);

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