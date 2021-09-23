import React from 'react';
import './style.css'
import {NavLink} from "react-router-dom";
import logo from '../img/logo-medical.png'

const Aside = () => {
    return (
        <aside className='aside'>
            <img src={logo} alt=""  className='logo'/>
            <ul className='nav-li'>
                <li className='nav-item'><NavLink to='/project'><i className="fa fa-th-large me-2"></i>Project</NavLink></li>
                <li className='nav-item'><NavLink to='/tasksWord'><i className="fa fa-th-large me-2"></i>Tasks of the Word</NavLink></li>
                <li className='nav-item'><NavLink to='/calendar'><i className="fa fa-th-large me-2"></i>Calendar</NavLink></li>
                <li className='nav-item'><NavLink to='/possibilities'><i className="fa fa-th-large me-2"></i>Possibilities</NavLink></li>
            </ul>
        </aside>
    );
};

export default Aside;