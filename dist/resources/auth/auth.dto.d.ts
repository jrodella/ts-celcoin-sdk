import { AuthResourceResponse } from "./auth.resource";
export declare class AuthDto {
    expires_in: number;
    access_token: string;
    token_type: string;
    createFromResource(AuthResourceResponse: AuthResourceResponse): AuthDto;
}
