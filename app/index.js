import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { message } from 'antd';
import appModel from './models/app';
import appRouter from './router';

const app = dva({
    history: createHistory(),
    onError(err) {
        message.error(err.message);
    }
});

app.use(createLoading());

app.model(appModel);

app.router(appRouter);

app.start('#root');
