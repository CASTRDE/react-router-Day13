import { Layout, Menu} from 'antd';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';

const { Header, Sider, Content, Footer} = Layout;

function BasicLayout(){
    return(
        <Layout>
            <Header>To-do List</Header>
            <Layout>
            <Sider>
                <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/help">Help</Link>
                    <Link to="/404">404</Link>
                </nav>
                </div>
            </Sider>
            <Content>
                <div className="content">
                    <Outlet />
                </div>
            </Content>
            </Layout>
            <Footer>Created by Me</Footer>
        </Layout>
    )
}

export default BasicLayout;