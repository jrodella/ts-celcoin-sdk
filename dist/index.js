"use strict";
/**
 * main
//  */
// import { Model as _Model } from "./Model";
// export { _Model as Model };
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDto = exports.Client = exports.Configuration = void 0;
const Configuration_1 = require("./Configuration");
Object.defineProperty(exports, "Configuration", { enumerable: true, get: function () { return Configuration_1.Configuration; } });
const Client_1 = require("./Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.Client; } });
const auth_dto_1 = require("./resources/auth/auth.dto");
Object.defineProperty(exports, "AuthDto", { enumerable: true, get: function () { return auth_dto_1.AuthDto; } });
const baas_billet = require("./resources/baas-billet/baas-billet.resource");
Object.keys(baas_billet).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_billet[key]; } });
    }
});
const baas_account = require("./resources/baas-account-manager/baas-account-manager.resource");
Object.keys(baas_account).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_account[key]; } });
    }
});
const baas_wallet = require("./resources/baas-wallet-transactions/baas-wallet-transactions.resource");
Object.keys(baas_wallet).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_wallet[key]; } });
    }
});
const baas_webhooks = require("./resources/baas-webhooks/baas-webhooks.resource");
Object.keys(baas_webhooks).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_webhooks[key]; } });
    }
});
const baas_pix_cashout_emv = require("./resources/baas-pix-cashout-emv/baas-pix-cashout-emv.resource");
Object.keys(baas_pix_cashout_emv).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_pix_cashout_emv[key]; } });
    }
});

const baas_pix_external_key = require("./resources/baas-pix-external-key/baas-pix-external-key");
Object.keys(baas_pix_external_key).forEach(key => {
    if (key !== "default" && !exports.hasOwnProperty(key)) {
        Object.defineProperty(exports, key, { enumerable: true, get: function () { return baas_pix_external_key[key]; } });
    }
});
//# sourceMappingURL=index.js.map