"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasCreateBusinessAccountResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasCreateBusinessAccountResource {
    static getConfig(token, params) {
        var _a, _b, _c, _d;
        return {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            data: {
                clientCode: params.clientCode,
                accountOnboardingType: params.accountOnboardingType,
                documentNumber: params.documentNumber,
                contactNumber: params.contactNumber,
                businessEmail: params.businessEmail,
                businessName: params.businessName,
                tradingName: params.tradingName,
                owner: params === null || params === void 0 ? void 0 : params.owner,
                businessAddress: {
                    postalCode: params.businessAddress.postalCode,
                    street: params.businessAddress.street,
                    number: (_a = params.businessAddress) === null || _a === void 0 ? void 0 : _a.number,
                    addressComplement: (_b = params.businessAddress) === null || _b === void 0 ? void 0 : _b.addressComplement,
                    neighborhood: params.businessAddress.neighborhood,
                    city: params.businessAddress.city,
                    state: params.businessAddress.state,
                    longitude: (_c = params.businessAddress) === null || _c === void 0 ? void 0 : _c.longitude,
                    latitude: (_d = params.businessAddress) === null || _d === void 0 ? void 0 : _d.latitude
                }
            },
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)()
        };
    }
    static async initiate(token, params) {
        const config = this.getConfig(token, params);
        return (0, axios_1.default)(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error.response.data.error);
                throw error;
            });
    }
}
exports.BaasCreateBusinessAccountResource = BaasCreateBusinessAccountResource;
BaasCreateBusinessAccountResource.resourceUrl = '/baas-onboarding/v1/account/business/create';
//# sourceMappingURL=baas-create-business-account.js.map