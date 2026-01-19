"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasConsultExternalPixKeyResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasConsultExternalPixKeyResource {
    static getConfig(token, params) {
        const resourceUrl = `${this.resourceUrl}${params.account}?key=${params.key}`;
        return {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            url: `${Configuration_1.Configuration.url}${resourceUrl}`,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
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
exports.BaasConsultExternalPixKeyResource = BaasConsultExternalPixKeyResource;
BaasConsultExternalPixKeyResource.resourceUrl = '/celcoin-baas-pix-dict-webservice/v1/pix/dict/entry/external/';
//# sourceMappingURL=baas-consult-external-pix-key.js.map