import Start from '@/modules/main/start/router';

export default [
    {
        path: '/',
        component: () => import('@/core/App.vue'),
        children: [...Start],
    },
    {
        path: '*',
        component: () => import('@/modules/errors/views/NotFound.vue'),
    }
];

