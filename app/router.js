import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
import App from './routes/app';

import routes from './routes';



export default ({ history, app }) => {
    return (
        <Router history={ history }>
            <App>
                <Switch>
                {
                    routes.map(({ path, ...others }) => (
                        <Route 
                            key={ path }
                            exact
                            component={ dynamic({ app, ...others }) }
                        />
                    ))
                }
                </Switch>
            </App>
        </Router>
    );
};