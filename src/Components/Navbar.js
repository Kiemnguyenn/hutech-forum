import React, { useState } from 'react'
import { Link }            from 'react-router-dom'
import { SidebarData }     from './SidebarData';
import './Navbar.css';

//import Button from 'react-bootstrap/Button';
//import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Tooltip from 'react-bootstrap/Tooltip';

import { IconContext }     from 'react-icons'
import { FaPlus }          from "react-icons/fa";
import { FaCommentDots }   from "react-icons/fa";
import { FaBell  }         from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBars }          from "react-icons/fa";
import { AiOutlineClose }  from "react-icons/ai";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className='menu'>
    <IconContext.Provider value={{ color: 'fff'}}>
        <div className='navbar'>
            <Link to ='#' className='menu-bars'>
                <FaBars onClick={showSidebar} />
            </Link>
            <h1 className='hutech'>HUTECH</h1>
            <input type='search' placeholder='Search...'></input>
            < FaPlus className='icons' />
            < FaCommentDots className='icons'/>
            < FaBell  className='icons'/>
            <div className='drop-mennu-user'>
                < FaRegUserCircle className='icons'/>
                <span></span>
            </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul classNAme='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                    <Link to ="#" className='menu-bars'>
                        <AiOutlineClose/>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    </IconContext.Provider>
    </div>
  )
}

export default Navbar