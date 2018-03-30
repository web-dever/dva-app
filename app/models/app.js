import { login } from '../services/login';


export const NAMESPACE = 'app';
export const LOGIN_ACTION = 'LOGIN_ACTION';

export default {
    namespace: NAMESPACE,
    state: {
        isLogin: false
    },
    effects: {
        *[LOGIN_ACTION]({ payload }, { put, call }) {
            const res = yield call(login, payload);
        }
    }
}