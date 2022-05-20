import ApiCoreService from 'api-core-service';

export default class CoreService extends ApiCoreService {
    constructor() {
        super();
        this.setDefaultBaseUrl(process.env.VUE_APP_API_URL);
    }
}
