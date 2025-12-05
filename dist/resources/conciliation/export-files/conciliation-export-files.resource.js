"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConciliationExportFilesResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../../Configuration");
const CreateCustomAgent_1 = require("../../../helpers/CreateCustomAgent");
class ConciliationExportFilesResource {
    static getConfig(token, params) {
        let url = `${Configuration_1.Configuration.url}${this.resourceUrl}?fileType=${params.fileType}&accountdate=${params.accountdate}`;
        if (params.page)
            url += `&page=${params.page}`;
        if (params.quantity)
            url += `&quantity=${params.quantity}`;
        const config = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
            url: url,
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
exports.ConciliationExportFilesResource = ConciliationExportFilesResource;
ConciliationExportFilesResource.resourceUrl = '/tools-conciliation/v1/exportfile';
//# sourceMappingURL=conciliation-export-files.resource.js.map