"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixGetTransactionStatusResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixGetTransactionStatusResource {
    static getConfig(token, params) {
        const config = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
            params
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
exports.PixGetTransactionStatusResource = PixGetTransactionStatusResource;
PixGetTransactionStatusResource.resourceUrl = '/pix/v1/payment/pi/status';
//# sourceMappingURL=pix-get-transaction-status.resource.js.map