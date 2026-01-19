"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasWalletTransactionsResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasWalletTransactionsResource {
    static getConfig(token, method, url, data = null) {
        return {
            method: method,
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + url,
            data: data,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }

    static async createRelease(token, account, data) {
        const url = `${this.resourceUrl}/wallet/entry/${account}`;
        const config = this.getConfig(token, 'POST', url, data);
        return (0, axios_1.default)(config)
            .then((response) => response)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasWalletTransactionsResource = BaasWalletTransactionsResource;
BaasWalletTransactionsResource.resourceUrl = '/baas-wallet-transactions-webservice/v1';
//# sourceMappingURL=baas-wallet-transactions.resource.js.map