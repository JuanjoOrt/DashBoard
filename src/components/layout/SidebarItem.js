import React from 'react';
import { NavLink } from 'react-router-dom'


const SidebarItem = (props) => {

    return(
        <li className="itemList">
            <NavLink to={props.link}>
                <div className="enlaceLista">
                    <div className="sidebar-text">{props.title}</div>
                    <div className={"linkColorTransition link"+props.option+"-transition"}></div>
                    <div className={"linkColor link"+props.option}></div>
                </div>
            </NavLink>
        </li>
    )
};

export default SidebarItem;