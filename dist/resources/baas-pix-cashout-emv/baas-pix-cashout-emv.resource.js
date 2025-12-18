"use strict";
var __importDefault = (this && this.__importDefault) ||
    function (mod) {
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
        // CORREÇÃO: Mapeamento explícito dos campos novos e aninhados (creditParty/debitParty)
        // para garantir que a estrutura complexa seja repassada corretamente ao endpoint.
        const data = {
            amount: params.amount,
            clientCode: params.clientCode,
            transactionIdentification: params.transactionIdentification,
            endToEndId: params.endToEndId,
            initiationType: params.initiationType,
            paymentType: params.paymentType,
            urgency: params.urgency,
            transactionType: params.transactionType,

            // Repassa os objetos estruturados
            debitParty: params.debitParty,
            creditParty: params.creditParty,

            description: params.description,
            remittanceInformation: params.remittanceInformation,

            // Mantém compatibilidade caso o emv seja passado solto
            emv: params.emv
        };

        // Remove chaves undefined para limpar o payload
        Object.keys(data).forEach(key => data[key] === undefined && delete data[key]);

        // A rota base deve ser a do webservice de transações
        const url = `/baas-wallet-transactions-webservice/v1/pix/payment`;

        const config = this.getConfig(token, 'POST', url, data);
        return (0, axios_1.default)(config)
            .then((response) => response) // Retorna response completo ou response.data dependendo da padronização do seu projeto
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasPixCashoutEmvResource = BaasPixCashoutEmvResource;
//# sourceMappingURL=baas-pix-cashout-emv.resource.js.map