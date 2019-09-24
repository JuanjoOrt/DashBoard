import React, {useEffect} from 'react'
import ItemGraph from '../graph/LineGraph'
import Layout from '../layout/Layout';



const DailyGraph = (props) => {

    useEffect(() => {
        props.fetchData()

        return () => { props.clearBuffer()}
    }, []);

    return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <ItemGraph title={'Line graph'}/>
                </div>
            </div>
        </Layout>
    )
}


export default DailyGraph;