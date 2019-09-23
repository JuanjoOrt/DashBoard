import React from "react";
import ReactDOM from "react-dom";


const Layout = props => {


    return(
        <div className={'background'}>
            <nav className="navbar">
                <div className="LogoSide">
                    <img className="logo" src="./images/logo.png" alt="logo corporativo" />
                        <div className="LogoSidetext">SHARES GRAPH</div>
                </div>

                <a href="https://github.com/JuanjoOrt" className="gitHub">
                    <img src="./images/github-brands.svg" className="gitHubIcon" alt="gitHub Icon" />
                        GitHub
                </a>
            </nav>
            <div className="container">
                <div className="sidebar">
                    <ul className="sidebarMenu">
                        <li className="itemList">
                            <a href="#">
                                <div className="enlaceLista">
                                    <div className="sidebar-text">DAILY GRAPH</div>
                                    <div className="linkColorTransition linkA-transition"></div>
                                    <div className="linkColor linkA"></div>
                                </div>
                            </a>
                        </li>
                        <li className="itemList">
                            <a href="#">
                                <div className="enlaceLista">
                                    <div className="sidebar-text">WEEKLY GRAPH</div>
                                    <div className="linkColorTransition linkB-transition"></div>
                                    <div className="linkColor linkB"></div>
                                </div>
                            </a>
                        </li>
                        <li className="itemList">
                            <a href="#">
                                <div className="enlaceLista">
                                    <div className="sidebar-text">MONTHLY GRAPH</div>
                                    <div className="linkColorTransition linkC-transition"></div>
                                    <div className="linkColor linkC"></div>
                                </div>
                            </a>
                        </li>
                        <li className="itemList">
                            <a href="#">
                                <div className="enlaceLista">
                                    <div className="sidebar-text">GENERAL DATA</div>
                                    <div className="linkColorTransition linkD-transition"></div>
                                    <div className="linkColor linkD"></div>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout;