"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixCreateLocationResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixCreateLocationResource {
    static getConfig(token, data) {
        const config = {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: data,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
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
exports.PixCreateLocationResource = PixCreateLocationResource;
PixCreateLocationResource.resourceUrl = '/pix/v1/location';
//# sourceMappingURL=pix-create-location.resource.js.map