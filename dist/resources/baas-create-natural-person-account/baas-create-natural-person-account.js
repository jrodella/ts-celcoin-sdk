"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaasCreateNaturalPersonAccountResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class BaasCreateNaturalPersonAccountResource {
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
                phoneNumber: params.phoneNumber,
                email: params.email,
                motherName: params.motherName,
                fullName: params.fullName,
                socialName: params === null || params === void 0 ? void 0 : params.socialName,
                birthDate: params.birthDate,
                address: {
                    postalCode: params.address.postalCode,
                    street: params.address.street,
                    number: (_a = params.address) === null || _a === void 0 ? void 0 : _a.number,
                    addressComplement: (_b = params.address) === null || _b === void 0 ? void 0 : _b.addressComplement,
                    neighborhood: params.address.neighborhood,
                    city: params.address.city,
                    state: params.address.state,
                    longitude: (_c = params.address) === null || _c === void 0 ? void 0 : _c.longitude,
                    latitude: (_d = params.address) === null || _d === void 0 ? void 0 : _d.latitude
                },
                isPoliticallyExposedPerson: params.isPoliticallyExposedPerson
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
exports.BaasCreateNaturalPersonAccountResource = BaasCreateNaturalPersonAccountResource;
BaasCreateNaturalPersonAccountResource.resourceUrl = '/baas-onboarding/v1/account/natural-person/create';
//# sourceMappingURL=baas-create-natural-person-account.js.map