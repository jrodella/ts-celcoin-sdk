"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasPixCreateKeyResource = exports.KeyTypes = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
var KeyTypes;
(function (KeyTypes) {
    KeyTypes["EVP"] = "EVP";
    KeyTypes["CPF"] = "CPF";
    KeyTypes["CNPJ"] = "CNPJ";
    KeyTypes["EMAIL"] = "EMAIL";
    KeyTypes["PHONE"] = "PHONE";
})(KeyTypes = exports.KeyTypes || (exports.KeyTypes = {}));
class BaasPixCreateKeyResource {
    static getConfig(token, params) {
        const config = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: {
                account: params.account,
                keyType: params.keyType,
                key: params.key
            },
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
        return config;
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        return (0, axios_1.default)(config).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }
}
exports.BaasPixCreateKeyResource = BaasPixCreateKeyResource;
BaasPixCreateKeyResource.resourceUrl = '/celcoin-baas-pix-dict-webservice/v1/pix/dict/entry';
//# sourceMappingURL=baas-pix-create-key.js.map