"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
class Configuration {
    static Init(data) {
        this.url = data.url;
        this.client_id = data.client_id;
        this.client_secret = data.client_secret;
        this.cert = data.cert;
        this.key = data.key;
        this.passphrase = data.passphrase;
    }
}
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map