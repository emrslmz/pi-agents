import CoreService from '@/core/service/core.service';

export default class SurveyServices extends CoreService {

    async getSurveyCategories() {
        this.url = `api/survey-categories`;
        this.defaultHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Credentials" : "true",
            "Accept": "*/*",
            "Accept-Language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cache-Control": "no-cache",
        };
        return this.get();
    }
}
