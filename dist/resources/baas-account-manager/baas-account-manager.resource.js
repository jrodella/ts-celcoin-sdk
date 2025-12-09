"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasAccountManagerResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasAccountManagerResource {
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
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }

    static async updateNaturalPerson(token, account, documentNumber, data) {
        const url = `${this.resourceUrl}/natural-person?Account=${account}&DocumentNumber=${documentNumber}`;
        const config = this.getConfig(token, 'PUT', url, data);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async updateBusiness(token, account, documentNumber, data) {
        const url = `${this.resourceUrl}/business?Account=${account}&DocumentNumber=${documentNumber}`;
        const config = this.getConfig(token, 'PUT', url, data);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async getIncomeReport(token, account, calendarYear) {
        const url = `${this.resourceUrl}/income-report?Account=${account}&CalendarYear=${calendarYear}`;
        const config = this.getConfig(token, 'GET', url);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasAccountManagerResource = BaasAccountManagerResource;
BaasAccountManagerResource.resourceUrl = '/baas-accountmanager/v1/account';
//# sourceMappingURL=baas-account-manager.resource.js.map