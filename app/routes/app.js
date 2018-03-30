import React from 'react';
import { connect } from 'dva';
import { SiderPanel } from '../components/Layout';
import { RightContent } from '../components/Layout'

import ui from './app.less';

import { NAMESPACE, LOGIN_ACTION } from '../models/app';

const App = (props) => {
    const { dispatch } = props;
    dispatch({ type: `${ NAMESPACE }/${ LOGIN_ACTION }` });
    return (
        <div className={ ui['clear-fix'] }>
            <SiderPanel />
            <RightContent { ...props } />
        </div>
    )
};

export default connect()(App);