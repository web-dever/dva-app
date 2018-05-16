import { routerRedux } from 'dva/router';

export default {
    namespace: 'app',
    state: {
        user: {},
        darkTheme: true,
        menu: [
            {
                id: '1',
                icon: 'laptap',
                name: '面板数据'
            }
        ],
        onlyIcon: false
    },
    effects: {

    },
    reducers: {
        ['change/sider/width'](state) {
            return {
              ...state,
              onlyIcon: !state.onlyIcon,
            }
          },
    }
}