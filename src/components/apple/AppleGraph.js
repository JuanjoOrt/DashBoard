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
                        <ItemGraph title={'Daily Apple Shares'} class={'graph-item graph-daily-line'}>
                            {
                                (props.dataAppleDaily === null || props.dataAppleDaily === undefined)
                                    ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                    : <Chart options={props.dataAppleDaily.dataDaily.options} series={props.dataAppleDaily.dataDaily.series} type="line" height={'310vh'}/>
                            }
                        </ItemGraph>
                    </div>
                    <div className='main-panel-bottomSide'>
                        <div className='main-panel-bottomSide-left'>
                            <ItemGraph title={'Previous day data'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataAppleDaily === null || props.dataAppleDaily === undefined)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataAppleDaily.dataSharesComparation.options} series={props.dataAppleDaily.dataSharesComparation.series} type="bar"  height={'310vh'}/>
                                }
                            </ItemGraph>
                        </div>
                        <div className='main-panel-bottomSide-right'>
                            <ItemGraph title={'Comparaison with others companies'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataAppleDaily === null || props.dataAppleDaily === undefined)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataAppleDaily.dataAllComparation.options} series={props.dataAppleDaily.dataAllComparation.series} type="donut"  height={'310vh'}/>
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