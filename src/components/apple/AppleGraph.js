import React, {useEffect} from 'react'
import ItemGraph from '../graph/LineGraph'
import Layout from '../layout/Layout';
import Chart from "react-apexcharts";



const AppleGraph = (props) => {

    useEffect(() => {
        props.fetchData()

        return () => { props.clearBuffer()}
    }, []);

    return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <ItemGraph title={'Daily Apple Shares'} class={'graph-item graph-daily-line'}>
                        {
                            (props.dataAppleDaily === null)
                                ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                : <Chart options={props.dataAppleDaily.options} series={props.dataAppleDaily.series} type="line" height={'330px'}/>
                        }
                    </ItemGraph>
                </div>
            </div>
        </Layout>
    )
}


export default AppleGraph;