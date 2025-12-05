"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasGetAllAccountsResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasGetAllAccountsResource {
    static getConfig(token, params) {
        const resourceUrl = `/baas-accountmanager/v1/account/fetch-all-business?DateFrom=${params.dateFrom}&DateTo=${params.dateTo}`;
        return {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + resourceUrl,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        return (0, axios_1.default)(config)
            .then((response) => {
            return response;
        })
            .catch((error) => {
            console.log(error);
            throw error;
        });
    }
}
exports.BaasGetAllAccountsResource = BaasGetAllAccountsResource;
BaasGetAllAccountsResource.resourceUrl = '/baas-accountmanager/v1/account/fetch-all-business';
//# sourceMappingURL=baas-get-all-accounts.js.map