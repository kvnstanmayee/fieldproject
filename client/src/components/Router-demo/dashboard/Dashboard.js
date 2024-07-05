import React from 'react';
//import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {
    // let { state } = useLocation();
    let stateObj = useSelector(state => state.userAuthorLoginReducer)
    console.log("stateobj is :", stateObj);

    return (
        <div>
            
            <div className="text-end hello">
                <h3 className='text-primary '>{stateObj.currentUser.username}</h3>
                <h6 className='text-secondary'>{stateObj.currentUser.email}</h6>
            </div>

            <div className='achievements-container'>
                <li className='achieve-links'>
                    <NavLink className="nav-link" to="achievements">Achievements</NavLink>
                </li>
                <li className='achieve-links'>
                    <NavLink className="nav-link" to="add-article">Add New Achievement</NavLink>
                </li>


            </div>
            <Outlet/>
        </div>
    );
}

export default Dashboard;
