import React from 'react';
import { connect } from 'dva';
import { SiderPanel } from '../components/Layout';
import { RightContent } from '../components/Layout';

import { Layout } from 'antd';

import ui from './app.less';

import { NAMESPACE, LOGIN_ACTION } from '../models/app';

const { Content, Footer, Sider } = Layout;

const App = (props) => {
    const { dispatch } = props;
    dispatch({ type: `${ NAMESPACE }/${ LOGIN_ACTION }` });

    return (
        <div className={ ui['clear-fix'] }>
            <Layout>
                <Sider></Sider>
                <Layout>
                    <Content></Content>
                    <Footer></Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default connect()(App);