"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasDeletePixKeyResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
class BaasDeletePixKeyResource {
    static getConfig(token, params) {
        return {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl + `/${params.key}`,
            data: {
                account: params.account
            },
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        try {
            const response = await (0, axios_1.default)(config);
            return response;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.BaasDeletePixKeyResource = BaasDeletePixKeyResource;
BaasDeletePixKeyResource.resourceUrl = '/celcoin-baas-pix-dict-webservice/v1/pix/dict/entry';
//# sourceMappingURL=baas-delete-pix-key.resource.js.map