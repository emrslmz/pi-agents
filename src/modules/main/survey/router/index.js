export default [{
    path: '/survey',
    name: 'SurveyPage',
    component: () => import('@/modules/main/survey/views/Survey.vue'),
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
