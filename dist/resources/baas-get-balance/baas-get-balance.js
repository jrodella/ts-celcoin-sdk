"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasGetBalanceResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasGetBalanceResource {
    static getConfig(token, params) {
        const resourceUrl = `${this.resourceUrl}?Account=${params.account}&DocumentNumber=${params.documentNumber}`;
        return {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + resourceUrl,
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
exports.BaasGetBalanceResource = BaasGetBalanceResource;
BaasGetBalanceResource.resourceUrl = '/baas-walletreports/v1/wallet/balance';
//# sourceMappingURL=baas-get-balance.js.map