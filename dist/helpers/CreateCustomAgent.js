"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomAgent = void 0;
const https_1 = __importDefault(require("https"));
const Configuration_1 = require("../Configuration");
function CreateCustomAgent() {
    const passphrase = Configuration_1.Configuration.passphrase;
    if (!Configuration_1.Configuration.cert || !Configuration_1.Configuration.key || !passphrase) {
        return null;
    }
    return new https_1.default.Agent({
        cert: Configuration_1.Configuration.cert,
        key: Configuration_1.Configuration.key,
        passphrase: passphrase,
    });
}
exports.CreateCustomAgent = CreateCustomAgent;
//# sourceMappingURL=CreateCustomAgent.js.map