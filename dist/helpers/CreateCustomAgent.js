"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomAgent = void 0;
const https_1 = __importDefault(require("https"));
const Configuration_1 = require("../Configuration");
function CreateCustomAgent() {
    if (!Configuration_1.Configuration.cert) {
        return null;
    }
    const agentOptions = {
        cert: Configuration_1.Configuration.cert,
        key: Configuration_1.Configuration.key || Configuration_1.Configuration.cert,
    };

    if (Configuration_1.Configuration.passphrase) {
        agentOptions.passphrase = Configuration_1.Configuration.passphrase;
    }

    return new https_1.default.Agent(agentOptions);
}
exports.CreateCustomAgent = CreateCustomAgent;
//# sourceMappingURL=CreateCustomAgent.js.map