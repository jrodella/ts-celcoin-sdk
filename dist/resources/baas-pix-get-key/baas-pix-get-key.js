"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasPixGetKeyResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasPixGetKeyResource {
    static async initiate(token, params) {
        const data = {
            key: params.key
        };

        if (params.payerId) {
            data.payerId = params.payerId;
        }

        const config = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: data,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
        return (0, axios_1.default)(config).then((response) => {
            return response;
        }).catch((error) => {
            console.log("ERROR: ", error.response ? error.response.data : error.message);
            throw error;
        });
    }
}
exports.BaasPixGetKeyResource = BaasPixGetKeyResource;
BaasPixGetKeyResource.resourceUrl = '/pix/v1/dict/v2/key';
//# sourceMappingURL=baas-pix-get-key.js.map