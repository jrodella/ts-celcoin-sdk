"use strict";
var __importDefault = (this && this.__importDefault) ||
    function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasPixExternalKeyResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");

class BaasPixExternalKeyResource {
    // Alterado de payerId para account
    static async get(token, account, key) {
        // Monta a URL: /baas/v2/pix/dict/entry/external/{account}?key={key}
        const url = `${Configuration_1.Configuration.url}/baas/v2/pix/dict/entry/external/${account}?key=${key}`;

        const config = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: url,
            httpAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };

        return (0, axios_1.default)(config).then((response) => {
            return response.data;
        }).catch((error) => {
            console.log("ERROR: ", error.response ? error.response.data : error.message);
            throw error;
        });
    }
}
exports.BaasPixExternalKeyResource = BaasPixExternalKeyResource;
//# sourceMappingURL=baas-pix-external-key.js.map