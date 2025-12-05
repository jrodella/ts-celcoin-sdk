"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimTypes = exports.BaasPixDictClaimResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
class BaasPixDictClaimResource {
    static getConfig(token, params) {
        return {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: params,
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
            console.log(error.response.data);
            throw error;
        }
    }
}
exports.BaasPixDictClaimResource = BaasPixDictClaimResource;
BaasPixDictClaimResource.resourceUrl = '/celcoin-baas-pix-dict-webservice/v1/pix/dict/claim';
var ClaimTypes;
(function (ClaimTypes) {
    ClaimTypes["PORTABILITY"] = "PORTABILITY";
    ClaimTypes["OWNERSHIP"] = "OWNERSHIP";
})(ClaimTypes = exports.ClaimTypes || (exports.ClaimTypes = {}));
//# sourceMappingURL=baas-pix-dict-claim.resource.js.map