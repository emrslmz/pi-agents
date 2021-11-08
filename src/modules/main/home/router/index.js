import Survey from '@/modules/main/survey/router';
import Conditions from '@/modules/main/conditions/router';
import About from '@/modules/main/about/router';
import Resources from '@/modules/main/resources/router';

export default [{
    path: '/',
    name: 'HomePage',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [...Survey, ...Conditions, ...About, ...Resources],
}];
