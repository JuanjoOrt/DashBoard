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
                    <div className='main-panel-topside'>
                        <ItemGraph title={'Daily Google Shares'} class={'graph-item graph-daily-line'}>
                            {
                                (props.dataGoogleDaily === null)
                                    ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                    : <Chart options={props.dataGoogleDaily.dataDaily.options} series={props.dataGoogleDaily.dataDaily.series} type="line" height={'330px'}/>
                            }
                        </ItemGraph>
                    </div>
                    <div className='main-panel-bottomSide'>
                        <div className='main-panel-bottomSide-left'>
                            <ItemGraph title={'Previous day data'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataGoogleDaily === null)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataGoogleDaily.dataSharesComparation.options} series={props.dataGoogleDaily.dataSharesComparation.series} type="bar" height={'340px'}/>
                                }
                            </ItemGraph>
                        </div>
                        <div className='main-panel-bottomSide-right'>
                            <ItemGraph title={'Comparaison with others companies'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataGoogleDaily === null)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataGoogleDaily.dataAllComparation.options} series={props.dataGoogleDaily.dataAllComparation.series} type="donut" height={'340px'}/>
                                }
                            </ItemGraph>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default AppleGraph;