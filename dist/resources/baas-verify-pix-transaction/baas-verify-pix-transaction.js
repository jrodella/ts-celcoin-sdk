"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasVerifyPixTransactionResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasVerifyPixTransactionResource {
    static getConfig(token, params) {
        let resourceUrl = `?`;
        if (params.id) {
            resourceUrl += `id=${params.id}`;
        }
        else if (params.clientCode) {
            resourceUrl += `clientCode=${params.clientCode}`;
        }
        else if (params.endToEndId) {
            resourceUrl += `endToEndId=${params.endToEndId}`;
        }
        else {
            throw new Error("You must provide at least one of the following parameters: id, clientCode or endToEndId");
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
exports.BaasVerifyPixTransactionResource = BaasVerifyPixTransactionResource;
BaasVerifyPixTransactionResource.resourceUrl = '/baas-wallet-transactions-webservice/v1/pix/payment/status';
//# sourceMappingURL=baas-verify-pix-transaction.js.map