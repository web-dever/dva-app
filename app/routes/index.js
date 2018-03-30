
export default [
    {
        path: '/',
        models: () => [import('../models/index')],
        component: () => import('../routes/home'),
    }, {
        path: '/userlist',
        models: () => import('../models/index'),
        component: () => import('../routes/home')
    }
];