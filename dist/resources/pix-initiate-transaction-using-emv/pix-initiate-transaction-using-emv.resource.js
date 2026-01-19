"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixInitiateTransactionUsingEmvResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixInitiateTransactionUsingEmvResource {
    static getConfig(token, params) {
        const data = {
            clientCode: params === null || params === void 0 ? void 0 : params.clientCode,
            emv: params.emv
        };
        const config = {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
            data
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
exports.PixInitiateTransactionUsingEmvResource = PixInitiateTransactionUsingEmvResource;
PixInitiateTransactionUsingEmvResource.resourceUrl = '/pix/v1/emv';
//# sourceMappingURL=pix-initiate-transaction-using-emv.resource.js.map