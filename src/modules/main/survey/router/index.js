export default [{
    path: '/survey',
    name: 'SurveyPage',
    component: () => import('@/modules/main/survey/views/SurveyHome.vue'),
    children: [
        {
            path: '/survey/:id',
            meta: {
                title: 'Survey Side',
            },
            component: () => import('@/modules/main/survey/components/Survey.vue'),
        },
    ]
}];
