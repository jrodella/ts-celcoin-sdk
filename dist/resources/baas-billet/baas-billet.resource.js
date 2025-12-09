"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasBilletResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasBilletResource {
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

    static async create(token, params) {
        const config = this.getConfig(token, 'POST', this.resourceUrl, params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async get(token, params) {
        const config = this.getConfig(token, 'GET', this.resourceUrl, null, params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async cancel(token, transactionId) {
        const url = `${this.resourceUrl}/${transactionId}`;
        const config = this.getConfig(token, 'DELETE', url);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }

    static async pdf(token, transactionId) {
        const url = `${this.resourceUrl}/pdf/${transactionId}`;
        const config = this.getConfig(token, 'GET', url);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.BaasBilletResource = BaasBilletResource;
BaasBilletResource.resourceUrl = '/baas/v2/Charge';
//# sourceMappingURL=baas-billet.resource.js.map