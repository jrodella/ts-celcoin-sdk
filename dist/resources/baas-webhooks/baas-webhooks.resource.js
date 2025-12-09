"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasWebhooksResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

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
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
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