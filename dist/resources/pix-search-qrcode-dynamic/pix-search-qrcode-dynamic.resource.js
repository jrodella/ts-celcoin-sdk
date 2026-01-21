"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixSearchQRCodeDynamicResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class PixSearchQRCodeDynamicResource {
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

    static async search(token, params) {
        const config = this.getConfig(token, 'GET', this.resourceUrl, null, params);
        return (0, axios_1.default)(config)
            .then((response) => response.data)
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.PixSearchQRCodeDynamicResource = PixSearchQRCodeDynamicResource;
PixSearchQRCodeDynamicResource.resourceUrl = '/pix/v2/brcode/dynamic/pi/collection';
//# sourceMappingURL=pix-search-qrcode-dynamic.resource.js.map
