import Survey from '@/modules/main/survey/router';

export default [{
    path: '/',
    name: 'HomePage',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Survey],
}];
