"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnowYourCustomerResource = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class KnowYourCustomerResource {
    static getConfig(token, params) {
        let data = new form_data_1.default();
        data.append('cnpj', params.cnpj);
        data.append('documentnumber', params.documentnumber);
        data.append('filetype', params.filetype.toUpperCase());
        data.append('file', fs_1.default.createReadStream(params.file));
        const config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: Configuration_1.Configuration.url + this.resourceUrl,
            headers: Object.assign({ 'Content-Type': 'multipart/form-data', 'Authorization': 'Bearer ' + token }, data.getHeaders()),
            data: data,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
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
                console.log(error.response);
                throw error;
            });
    }
}
exports.KnowYourCustomerResource = KnowYourCustomerResource;
KnowYourCustomerResource.resourceUrl = '/celcoinkyc/document/v1/fileupload';
//# sourceMappingURL=know-your-customer.js.map