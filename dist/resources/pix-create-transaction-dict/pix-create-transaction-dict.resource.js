"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixCreateTransactionDictResource = exports.InitiationTypes = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
var InitiationTypes;
(function (InitiationTypes) {
    InitiationTypes["DICT"] = "DICT";
    InitiationTypes["MANUAL"] = "MANUAL";
})(InitiationTypes = exports.InitiationTypes || (exports.InitiationTypes = {}));
class PixCreateTransactionDictResource {
    static getConfig(token, data) {
        const config = {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: data,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
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
exports.PixCreateTransactionDictResource = PixCreateTransactionDictResource;
PixCreateTransactionDictResource.resourceUrl = '/pix/v1/payment';
//# sourceMappingURL=pix-create-transaction-dict.resource.js.map