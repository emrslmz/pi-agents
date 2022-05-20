import SurveyServices from '@/modules/main/survey/service/survey.services';

export const getSurveyCategories = async () => {
    const response = await new SurveyServices().getSurveyCategories();
    console.log(response);
};
