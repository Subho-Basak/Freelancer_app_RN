import { AppConfig } from "../../api/api-config"
import CommonApiService from "../../api/common-api.service"

const FreelancerListService = {
    fetchList: () => {
        return CommonApiService.get(AppConfig.baseUrl + AppConfig.endpoints.FREELANCER_LIST)
    }
}

export default FreelancerListService;