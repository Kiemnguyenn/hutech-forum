import React from 'react'; 

import { FaHome }          from "react-icons/fa";
import { FaPlus }          from "react-icons/fa";
import { FaUserFriends }   from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaStar }          from "react-icons/fa";
import { FaCog }           from "react-icons/fa";
import { FaSignOutAlt }    from "react-icons/fa";

export const SidebarData = [
    {
        title : 'Home',
        path  : '/homepage',
        icon  : < FaHome />,
        cName : 'nav-text'
    },
    {
        title : 'Create Post',
        path  : '/create',
        icon  : < FaPlus />,
        cName : 'nav-text'
    },
    {
        title : 'Group',
        path  : '/group',
        icon  : < FaUserFriends />,
        cName : 'nav-text'
    },
    {
        title : 'Event',
        path  : '/event',
        icon  : < FaCalendarCheck />,
        cName : 'nav-text'
    },
    {
        title : 'Save',
        path  : '/save',
        icon  : < FaStar />,
        cName : 'nav-text'
    },
    {
        title : 'Setting',
        path  : '/setting',
        icon  : < FaCog />,
        cName : 'nav-text'
    },
    {
        title : 'Logout',
        path  : '/',
        icon  : < FaSignOutAlt />,
        cName : 'nav-text'
    },
]