import React from 'react';
import SidebarItem from './SidebarItem';
import routeLink from '../../RouteLink';
import {Link} from "react-router-dom";

const Layout = props => {

    return(
        <div className="background"  >
            <nav className="navbar">
                <Link to={routeLink.home} style={{ textDecoration: 'none' }}>
                    <div className="LogoSide">
                        <img className="logo" src="./images/logo.png" alt="logo corporativo" />
                        <div className="LogoSidetext" >SHARES GRAPH</div>
                    </div>
                </Link>

                <a href="https://github.com/JuanjoOrt" className="gitHub">
                    <img src="./images/github-brands.svg" className="gitHubIcon" alt="gitHub Icon" />
                        GitHub
                </a>
            </nav>
            <div className="container">
                <div className="sidebar">
                    <ul className="sidebarMenu">
                        <SidebarItem link={routeLink.dailyGraph} title={'DAILY GRAPH'} option={'A'}/>
                        <SidebarItem link={routeLink.weeklyGraph} title={'WEEKLY GRAPH'} option={'B'}/>
                        <SidebarItem link={routeLink.monthlyGraph} title={'MONTHLY GRAPH'} option={'C'}/>
                        <SidebarItem link={routeLink.generalData} title={'GENERAL DATA'} option={'D'}/>
                    </ul>
                </div>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default  Layout;