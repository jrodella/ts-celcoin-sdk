"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixCancelQRCodeDynamicResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class PixCancelQRCodeDynamicResource {
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
}
exports.PixCancelQRCodeDynamicResource = PixCancelQRCodeDynamicResource;
PixCancelQRCodeDynamicResource.resourceUrl = '/pix/v1/brcode/dynamic';
//# sourceMappingURL=pix-cancel-qrcode-dynamic.resource.js.map
