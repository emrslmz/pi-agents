export default {
    survey: [
        {
            id: 1,
            name: 'Valorant',
            minName: 'VALO',
            image: '001-boy.svg',
            color: 'red',
        },
        {
            id: 2,
            name: 'Minecraft',
            minName: 'MC',
            image: 'valorant_heros.png',
            color: 'green',
        },
    ],
    surveyQuestions: [  //survey.id === surveyQuestions.id ise push survey.questions
        {
            surveyId: 1,
            text: 'Soru 1',
        },
        {
            surveyId: 1,
            text: 'Soru 2',
        },
        {
            surveyId: 1,
            text: 'Soru 3',
        },
        {
            surveyId: 1,
            text: 'Soru 4',
        },
        {
            surveyId: 2,
            text: 'Soru 4',
        }
    ]
};
