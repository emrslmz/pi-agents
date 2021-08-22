import Home from '@/modules/main/home/router';

export default [{
    path: '/',
    name: 'StartPage',
    component: () => import('@/modules/main/start/views/Start.vue'),
    children: [...Home],
}];
