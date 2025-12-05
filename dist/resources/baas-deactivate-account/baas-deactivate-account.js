"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasDeactivateAccountResource = exports.StatusType = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
var StatusType;
(function (StatusType) {
    StatusType["BLOQUEADO"] = "BLOQUEADO";
    StatusType["ATIVO"] = "ATIVO";
})(StatusType = exports.StatusType || (exports.StatusType = {}));
class BaasDeactivateAccountResource {
    static getConfig(token, params) {
        const resourceUrl = `/baas-accountmanager/v1/account/status?Account=${params.account}`;
        return {
            method: 'PUT',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + resourceUrl,
            data: {
                status: params.status,
                reason: params.reason
            },
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
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
exports.BaasDeactivateAccountResource = BaasDeactivateAccountResource;
BaasDeactivateAccountResource.resourceUrl = '/baas-accountmanager/v1/account/status';
//# sourceMappingURL=baas-deactivate-account.js.map