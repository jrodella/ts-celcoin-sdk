"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTypes = exports.UrgencyTypes = exports.InitiationTypes = exports.BaasCashoutPixResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasCashoutPixResource {
    static getConfig(token, params) {
        return {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: params,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        try {
            const response = await (0, axios_1.default)(config);
            return response;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.BaasCashoutPixResource = BaasCashoutPixResource;
BaasCashoutPixResource.resourceUrl = '/baas-wallet-transactions-webservice/v1/pix/payment';
var InitiationTypes;
(function (InitiationTypes) {
    InitiationTypes["DICT"] = "DICT";
    InitiationTypes["MANUAL"] = "MANUAL";
    InitiationTypes["STATIC_QRCODE"] = "STATIC_QRCODE";
    InitiationTypes["DYNAMIC_QRCODE"] = "DYNAMIC_QRCODE";
})(InitiationTypes = exports.InitiationTypes || (exports.InitiationTypes = {}));
var UrgencyTypes;
(function (UrgencyTypes) {
    UrgencyTypes["HIGH"] = "HIGH";
    UrgencyTypes["NORMAL"] = "NORMAL";
})(UrgencyTypes = exports.UrgencyTypes || (exports.UrgencyTypes = {}));
var PaymentTypes;
(function (PaymentTypes) {
    PaymentTypes["IMMEDIATE"] = "IMMEDIATE";
    PaymentTypes["FRAUD"] = "FRAUD";
    PaymentTypes["SCHEDULED"] = "SCHEDULED";
})(PaymentTypes = exports.PaymentTypes || (exports.PaymentTypes = {}));
//# sourceMappingURL=baas-cashout-pix.js.map