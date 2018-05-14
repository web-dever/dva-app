import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Layout } from 'antd';




const { Content, Footer, Sider } = Layout;

const Container = (props) => {
    return (
        <div>
            <Layout>
                <Sider></Sider>
            </Layout>
        </div>
    )
}