"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasGetPixStatusResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
class BaasGetPixStatusResource {
    static getConfig(token, params) {
        return {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            params,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        try {
            const response = await (0, axios_1.default)(config);
            return response.data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.BaasGetPixStatusResource = BaasGetPixStatusResource;
BaasGetPixStatusResource.resourceUrl = '/baas-wallet-transactions-webservice/v1/pix/payment/status';
//# sourceMappingURL=baas-get-pix-status.resource.js.map