"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixGetTransactionsResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixGetTransactionsResource {
    static async initiate(token, params) {
        const config = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            params,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
        return (0, axios_1.default)(config).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    }
}
exports.PixGetTransactionsResource = PixGetTransactionsResource;
PixGetTransactionsResource.resourceUrl = '/baas-walletreports/v1/wallet/movement';
//# sourceMappingURL=pix-get-transactions.resource.js.map