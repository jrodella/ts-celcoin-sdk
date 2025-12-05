"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixCreateTransactionReversalResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixCreateTransactionReversalResource {
    static getConfig(token, params) {
        const data = {
            reason: params.reason,
            amount: params.amount,
            clientCode: params.clientCode,
            additionalInformation: params.additionalInformation,
            reversalDescription: params.reversalDescription
        };
        const config = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            url: Configuration_1.Configuration.url + this.resourceUrl + params.transactionId,
            data: data,
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
            throw error;
        });
    }
}
exports.PixCreateTransactionReversalResource = PixCreateTransactionReversalResource;
PixCreateTransactionReversalResource.resourceUrl = '/pix/v2/reverse/pi/';
//# sourceMappingURL=pix-create-transaction-reversal.resource.js.map