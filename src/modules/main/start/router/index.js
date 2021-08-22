import Home from '@/modules/main/home/router';
import Survey from '@/modules/main/survey/router';

export default [{
    path: '/',
    name: 'StartPage',
    component: () => import('@/modules/main/start/views/Start.vue'),
    children: [...Home, ...Survey],
}];
