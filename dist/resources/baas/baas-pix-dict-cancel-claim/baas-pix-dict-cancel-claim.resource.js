"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasPixDictCancelClaimResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
class BaasPixDictCancelClaimResource {
    static getConfig(token, params) {
        return {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: params,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        try {
            return await (0, axios_1.default)(config);
        }
        catch (error) {
            console.log(error.response.data);
            throw error;
        }
    }
}
exports.BaasPixDictCancelClaimResource = BaasPixDictCancelClaimResource;
BaasPixDictCancelClaimResource.resourceUrl = '/celcoin-baas-pix-dict-webservice/v1/pix/dict/claim/cancel';
//# sourceMappingURL=baas-pix-dict-cancel-claim.resource.js.map