import React, {useEffect} from 'react'
import ItemGraph from '../graph/LineGraph'
import Layout from '../layout/Layout';



const AppleGraph = (props) => {

    useEffect(() => {
        props.fetchData()

        return () => { props.clearBuffer()}
    }, []);

    return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <ItemGraph title={'Daily Apple Shares'}/>
                </div>
            </div>
        </Layout>
    )
}


export default AppleGraph;