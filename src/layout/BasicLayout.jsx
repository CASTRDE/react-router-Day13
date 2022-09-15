import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function BasicLayout(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link><br></br>
                <Link to="/about">About</Link><br></br>
                <Link to="/help">Help</Link><br></br>
                <Link to="/404">404</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default BasicLayout;