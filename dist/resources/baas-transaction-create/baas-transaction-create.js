"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasTransactionCreateResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const https_1 = __importDefault(require("https"));
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasTransactionCreateResource {
    static createCustomAgent() {
        if (!this.agent) {
            const passphrase = Configuration_1.Configuration.passphrase;
            this.agent = new https_1.default.Agent({
                cert: Configuration_1.Configuration.cert,
                key: Configuration_1.Configuration.key,
                passphrase: passphrase,
            });
        }
    }
    static getConfig(token, params) {
        const config = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: Object.assign({}, params),
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
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
exports.BaasTransactionCreateResource = BaasTransactionCreateResource;
BaasTransactionCreateResource.resourceUrl = '/baas-wallet-transactions-webservice/v1/wallet/internal/transfer';
BaasTransactionCreateResource.agent = null;
//# sourceMappingURL=baas-transaction-create.js.map