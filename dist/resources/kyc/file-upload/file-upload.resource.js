"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileTypes = exports.FileUploadParamsResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
const FormData = require('form-data');
class FileUploadParamsResource {
    static getConfig(token, params) {
        let formdata = new FormData();
        formdata.append('front', params.front);
        formdata.append('verse', params.verse);
        formdata.append('documentNumber', params.documentNumber);
        formdata.append('fileType', params.fileType);
        const config = {
            method: 'POST',
            maxBodyLength: Infinity,
            headers: Object.assign({ 'Authorization': `Bearer ${token}`, 'Content-Type': "multipart/form-data" }, formdata.getHeaders()),
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: formdata,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
        return config;
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        return await (0, axios_1.default)(config).catch((error) => {
            console.error(error);
            throw error;
        });
    }
}
exports.FileUploadParamsResource = FileUploadParamsResource;
FileUploadParamsResource.resourceUrl = '/celcoinkyc/document/v1/fileupload';
var FileTypes;
(function (FileTypes) {
    FileTypes["RG"] = "RG";
    FileTypes["CNH"] = "CNH";
    FileTypes["RNE"] = "RNE";
    FileTypes["CARTAO_CNPJ"] = "CARTAO_CNPJ";
    FileTypes["CONTRATO_SOCIAL"] = "CONTRATO_SOCIAL";
    FileTypes["BALANCO"] = "BALANCO";
    FileTypes["FATURAMENTO"] = "FATURAMENTO";
    FileTypes["KYC_EXTERNO"] = "KYC_EXTERNO";
})(FileTypes = exports.FileTypes || (exports.FileTypes = {}));
//# sourceMappingURL=file-upload.resource.js.map