export interface AuthResourceResponse {
    token_type: string;
    expires_in: number;
    access_token: string;
}
export declare class AuthResource {
    protected static resourceUrl: string;
    static getToken(): Promise<AuthResourceResponse>;
}
