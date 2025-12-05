"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class AuthResource {
    static async getToken() {
        var data = new URLSearchParams();
        data.append('client_id', Configuration_1.Configuration.client_id ? Configuration_1.Configuration.client_id : "");
        data.append('client_secret', Configuration_1.Configuration.client_secret ? Configuration_1.Configuration.client_secret : "");
        data.append('grant_type', 'client_credentials');
        const config = {
            method: 'POST',
            url: Configuration_1.Configuration.url + this.resourceUrl,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: data,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
        return (0, axios_1.default)(config)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            throw error;
        });
    }
}
exports.AuthResource = AuthResource;
AuthResource.resourceUrl = '/v5/token';
//# sourceMappingURL=auth.resource.js.map