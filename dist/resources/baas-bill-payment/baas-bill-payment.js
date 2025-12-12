"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasBillPaymentResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasBillPaymentResource {
    static getConfig(token, method, urlSuffix, params = null, data = null) {
        return {
            method: method,
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl + urlSuffix,
            data: data,
            params: params,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }

    static async initiate(token, params) {
        const config = this.getConfig(token, 'POST', '', null, params);
        return (0, axios_1.default)(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async status(token, params) {
        const config = this.getConfig(token, 'GET', '/status', params, null);
        return (0, axios_1.default)(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async authorize(token, params) {
        // Configuração manual para sobrescrever a URL base (rota legada/padrão)
        const config = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            // URL específica para consulta de boleto fora do padrão BaaS
            url: Configuration_1.Configuration.url + '/v5/transactions/billpayments/authorize',
            data: params,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };

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
exports.BaasBillPaymentResource = BaasBillPaymentResource;
BaasBillPaymentResource.resourceUrl = '/baas/v2/billpayment';
//# sourceMappingURL=baas-bill-payment.js.map