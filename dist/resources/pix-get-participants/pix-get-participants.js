"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixGetParticipantsResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixGetParticipantsResource {
    static getConfig(token) {
        const config = {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            url: Configuration_1.Configuration.url + this.resourceUrl,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
        };
        return config;
    }
    static async initiate(token) {
        const config = this.getConfig(token);
        return (0, axios_1.default)(config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
}
exports.PixGetParticipantsResource = PixGetParticipantsResource;
PixGetParticipantsResource.resourceUrl = '/pix/v1/participants';
//# sourceMappingURL=pix-get-participants.js.map