export default [{
    path: '/home',
    name: 'HomePage',
    component: () => import('@/modules/main/home/views/Home.vue'),
    children: [
        // {
        //     path: '/profiles',
        //     meta: {
        //         title: 'Profile',
        //     },
        //     component: () => import('@/modules/main/profiles/components/Profiles.vue'),
        // },
    ]
}];
