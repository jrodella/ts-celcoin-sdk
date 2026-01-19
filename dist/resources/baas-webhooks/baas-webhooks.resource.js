"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasWebhooksResource = exports.BaasWebhookEntity = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

var BaasWebhookEntity;
(function (BaasWebhookEntity) {
    BaasWebhookEntity["ONBOARDING_CREATE"] = "onboarding-create";
    BaasWebhookEntity["PIX_PAYMENT_OUT"] = "pix-payment-out";
    BaasWebhookEntity["PIX_PAYMENT_IN"] = "pix-payment-in";
    BaasWebhookEntity["PIX_REVERSAL_IN"] = "pix-reversal-in";
    BaasWebhookEntity["PIX_REVERSAL_OUT"] = "pix-reversal-out";
    BaasWebhookEntity["SPB_TRANSFER_OUT_TED"] = "spb-transfer-out";
    BaasWebhookEntity["SPB_TRANSFER_IN_TED"] = "spb-transfer-in";
    BaasWebhookEntity["SPB_REVERSAL_OUT_TED"] = "spb-reversal-out";
    BaasWebhookEntity["SPB_REVERSAL_IN_TED"] = "spb-reversal-in";
    BaasWebhookEntity["VEHICLE_DEBTS_RECEIPT"] = "vehicledebts-receipt";
    BaasWebhookEntity["VEHICLE_DEBTS_CONSULT"] = "vehicledebts-consult";
    BaasWebhookEntity["VEHICLE_DEBTS"] = "vehicledebts";
    BaasWebhookEntity["TOPUP"] = "topup";
    BaasWebhookEntity["SLC_PAYMENT_IN"] = "slc-payment-in";
    BaasWebhookEntity["PIX_REVERSAL_OUT_GALAX"] = "pix-reversal-out-galax";
    BaasWebhookEntity["PIX_PAYMENT_IN_GALAX"] = "pix-payment-in-galax";
    BaasWebhookEntity["PIX_DICT_CLAIM_WAITING"] = "pix-dict-claim-waiting";
    BaasWebhookEntity["PIX_DICT_CLAIM_OPEN"] = "pix-dict-claim-open";
    BaasWebhookEntity["PIX_DICT_CLAIM_CONFIRMED"] = "pix-dict-claim-confirmed";
    BaasWebhookEntity["PIX_DICT_CLAIM_COMPLETED"] = "pix-dict-claim-completed";
    BaasWebhookEntity["PIX_DICT_CLAIM_CANCELLED"] = "pix-dict-claim-cancelled";
    BaasWebhookEntity["ONBOARDING_PROPOSAL"] = "onboarding-proposal";
    BaasWebhookEntity["ONBOARDING_FILE"] = "onboarding-file";
    BaasWebhookEntity["ONBOARDING_DOCUMENTSCOPY"] = "onboarding-documentscopy";
    BaasWebhookEntity["ONBOARDING_BACKGROUNDCHECK"] = "onboarding-backgroundcheck";
    BaasWebhookEntity["LIMIT"] = "limit";
    BaasWebhookEntity["KYC"] = "kyc";
    BaasWebhookEntity["JUDICIAL_MOVEMENT_OUT"] = "judicial-movement-out";
    BaasWebhookEntity["JUDICIAL_MOVEMENT_IN"] = "judicial-movement-in";
    BaasWebhookEntity["INTERNAL_TRANSFER_IN"] = "internal-transfer-in";
    BaasWebhookEntity["INTERNAL_TRANSFER_OUT"] = "internal-transfer-out";
    BaasWebhookEntity["CHARGE_IN"] = "charge-in";
    BaasWebhookEntity["CHARGE_CREATE"] = "charge-create";
    BaasWebhookEntity["CHARGE_CANCELED"] = "charge-canceled";
    BaasWebhookEntity["BILLPAYMENT"] = "billpayment";
    BaasWebhookEntity["BILLPAYMENT_OCCURRENCE"] = "billpayment-occurrence";
    BaasWebhookEntity["ACCOUNT_MIGRATION"] = "account-migration";
})(BaasWebhookEntity = exports.BaasWebhookEntity || (exports.BaasWebhookEntity = {}));

class BaasWebhooksResource {
    static getConfig(token, method, url, data = null, params = null) {
        return {
            method: method,
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + url,
            data: data,
            params: params,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }

    static async register(token, params) {
        const config = this.getConfig(token, 'POST', '/baas-webhookmanager/v1/webhook/subscription', params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async list(token, entity, active) {
        const params = {};
        if (entity) params['Entity'] = entity;
        if (active !== undefined && active !== null) params['Active'] = active;

        const config = this.getConfig(token, 'GET', '/baas-webhookmanager/v1/webhook/subscription', null, params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async edit(token, entity, params) {
        const url = `/baas-webhookmanager/v1/webhook/subscription/${entity}`;
        const config = this.getConfig(token, 'PUT', url, params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async remove(token, entity) {
        const url = `/baas-webhookmanager/v1/webhook/subscription/${entity}`;
        const config = this.getConfig(token, 'DELETE', url);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async listEntities(token) {
        const config = this.getConfig(token, 'GET', '/baas-webhookmanager/v1/webhook/entity/list');
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasWebhooksResource = BaasWebhooksResource;
//# sourceMappingURL=baas-webhooks.resource.js.map