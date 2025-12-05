"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasVerifyAccountStatusResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasVerifyAccountStatusResource {
    static getConfig(token, params) {
        let resourceUrl = `?`;
        if (params.onboardingId) {
            resourceUrl += `onboardingId=${params.onboardingId}`;
        }
        else if (params.clientCode) {
            resourceUrl += `clientCode=${params.clientCode}`;
        }
        else {
            throw new Error("You must provide at least one of the following parameters: onboardingId or clientCode");
        }
        const config = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl + resourceUrl,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
        return config;
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
exports.BaasVerifyAccountStatusResource = BaasVerifyAccountStatusResource;
BaasVerifyAccountStatusResource.resourceUrl = '/baas-onboarding/v1/account/check';
//# sourceMappingURL=baas-verify-account-status.js.map