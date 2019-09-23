import React from 'react';
import { Link } from 'react-router-dom'


const SidebarItem = (props) => {

    return(
        <li className="itemList">
            <Link to={props.link} >
                <div className="enlaceLista">
                    <div className="sidebar-text">{props.title}</div>
                    <div className={"linkColorTransition link"+props.option+"-transition"}></div>
                    <div className={"linkColor link"+props.option}></div>
                </div>
            </Link>
        </li>
    )
};

export default SidebarItem;