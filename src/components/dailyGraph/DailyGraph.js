import React, {useEffect} from 'react'
import ItemGraph from '../graph/ItemGraph'
import Layout from '../layout/Layout';
import Color from '../../LayoutColor'


const DailyGraph = (props) => {

    useEffect(() => {
        props.fetchData()
    }, []);

    return(
        <Layout>
            {console.log(props)}
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <ItemGraph title={'Line graph'} color={Color.dailyGraph}/>
                </div>
            </div>
        </Layout>
    )
}


export default DailyGraph;