"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasCloseAccountResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasCloseAccountResource {
    static getConfig(token, params) {
        const resourceUrlWithParams = `${this.resourceUrl}?Account=${params.account}&Reason=${params.reason}`;
        return {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            url: Configuration_1.Configuration.url + resourceUrlWithParams,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        return (0, axios_1.default)(config)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            console.log(error);
            throw error;
        });
    }
}
exports.BaasCloseAccountResource = BaasCloseAccountResource;
BaasCloseAccountResource.resourceUrl = '/baas-accountmanager/v1/account/close';
//# sourceMappingURL=baas-close-account.js.map