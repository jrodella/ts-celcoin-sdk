"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixGetWebhooksByEventResource = void 0;
const axios_1 = __importDefault(require("axios"));
const Configuration_1 = require("../../Configuration");
const CreateCustomAgent_1 = require("../../helpers/CreateCustomAgent");
class PixGetWebhooksByEventResource {
    static getConfig(token, _a) {
        var { webhookEvent } = _a, params = __rest(_a, ["webhookEvent"]);
        const config = {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token },
            url: Configuration_1.Configuration.url + this.resourceUrl + webhookEvent,
            httpsAgent: (0, CreateCustomAgent_1.CreateCustomAgent)(),
            params
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
                console.log(error);
                throw error;
            });
    }
}
exports.PixGetWebhooksByEventResource = PixGetWebhooksByEventResource;
PixGetWebhooksByEventResource.resourceUrl = '/webhook-manager-webservice/v1/webhook/';
//# sourceMappingURL=pix-get-webhooks-by-event.resource.js.map