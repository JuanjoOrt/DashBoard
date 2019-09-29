import React from 'react'
import Layout from '../layout/Layout';
import HomeText from './HomeText';

const Home = () => {
        return(
        <Layout>
            <div className='main-panel'>
                <div className='main-panel-graph'>
                    <div className='main-home'>
                        <div className='main-home-text'>
                            <HomeText />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default Home;