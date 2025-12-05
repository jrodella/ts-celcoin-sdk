"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDto = void 0;
class AuthDto {
    createFromResource(AuthResourceResponse) {
        this.expires_in = AuthResourceResponse.expires_in;
        this.access_token = AuthResourceResponse.access_token;
        this.token_type = AuthResourceResponse.token_type;
        return this;
    }
}
exports.AuthDto = AuthDto;
//# sourceMappingURL=auth.dto.js.map