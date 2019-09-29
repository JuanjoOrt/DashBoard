import React, {useEffect} from 'react'
import ItemGraph from '../graph/LineGraph'
import Layout from '../layout/Layout';
import Chart from "react-apexcharts";



const MicrosoftGraph = (props) => {

    useEffect(() => {
        props.fetchData()

        return () => { props.clearBuffer()}
    }, []);

    return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <div className='main-panel-topside'>
                        <ItemGraph title={'Daily Microsoft Shares'} class={'graph-item graph-daily-line'}>
                            {
                                (props.dataMicrosoftDaily === null || props.dataMicrosoftDaily === undefined)
                                    ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                    : <Chart options={props.dataMicrosoftDaily.dataDaily.options} series={props.dataMicrosoftDaily.dataDaily.series} type="line" height={'330px'}/>
                            }
                        </ItemGraph>
                    </div>
                    <div className='main-panel-bottomSide'>
                        <div className='main-panel-bottomSide-left'>
                            <ItemGraph title={'Previous day data'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataMicrosoftDaily === null || props.dataMicrosoftDaily === undefined)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataMicrosoftDaily.dataSharesComparation.options} series={props.dataMicrosoftDaily.dataSharesComparation.series} type="bar" height={'340px'}/>
                                }
                            </ItemGraph>
                        </div>
                        <div className='main-panel-bottomSide-right'>
                            <ItemGraph title={'Comparaison with others companies'} class={'graph-item graph-daily-line'}>
                                {
                                    (props.dataMicrosoftDaily === null || props.dataMicrosoftDaily === undefined)
                                        ? <div className='rolling-div'><img className="rolling" src="./images/rolling.svg" /></div>
                                        : <Chart options={props.dataMicrosoftDaily.dataAllComparation.options} series={props.dataMicrosoftDaily.dataAllComparation.series} type="donut" height={'340px'}/>
                                }
                            </ItemGraph>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default MicrosoftGraph;