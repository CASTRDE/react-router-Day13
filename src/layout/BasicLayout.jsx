import {Footer} from "antd/lib/layout/layout";
import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function BasicLayout(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/help">Help</Link>
                <Link to="/404">404</Link>
            </nav>
            <div className="content">
                <Outlet />
            </div>
            <Footer>Created by Me</Footer>
        </div>
    )
}

export default BasicLayout;