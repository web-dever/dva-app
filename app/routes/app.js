import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { SiderPanel, Header } from '../components/Layout';

import { Layout } from 'antd';

import ui from './app.less';

import { NAMESPACE, LOGIN_ACTION } from '../models/app';

const { Content, Footer, Sider } = Layout;

const App = (props) => {
    const { dispatch, children, location, loading, app } = props;
    const {
        user, onlyIcon
    } = app;

    const changeWidth = () => {
        dispatch({
            type: 'app/change/sider/width'
        });
    }

    let { pathname } = location;
    
    pathname = pathname.startsWith('/') ? pathname : `/${pathname}`;


    return (
        <Layout>
            <Sider collapsed={onlyIcon} collapsible trigger={null}>
                <SiderPanel onlyIcon={onlyIcon}></SiderPanel>
            </Sider>
            <Layout style={{ height: '100vh', overflow: 'scroll' }}>
                <Header changeWidth={changeWidth} onlyIcon={onlyIcon}></Header>
                <Content>
                    {children}
                </Content>
                <Footer>ELLA@2018</Footer>
            </Layout>
        </Layout>
    );
};


const mapStateToProps = (state) => {
    return {
        app: state.app,
        loading: state.loading
    };
};

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(App));