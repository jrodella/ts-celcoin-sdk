"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasPixCashoutEmvResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasPixCashoutEmvResource {
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
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }

    static async create(token, params) {
        // Endpoint de pagamento BaaS
        const url = `/baas-wallet-transactions-webservice/v1/pix/payment`;

        // Montagem do payload específico para pagamento via EMV no BaaS
        const data = {
            clientCode: params.clientCode,
            amount: params.amount,
            debitParty: {
                account: params.account
            },
            emv: params.emv, // O código Pix Copia e Cola
            description: params.description
        };

        const config = this.getConfig(token, 'POST', url, data);
        return (0, axios_1.default)(config)
            .then((response) => response)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasPixCashoutEmvResource = BaasPixCashoutEmvResource;
//# sourceMappingURL=baas-pix-cashout-emv.resource.js.map