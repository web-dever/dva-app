
export default [
    {
        path: '/',
        models: () => [import('../models/index')],
        component: () => import('./home'),
    }
];