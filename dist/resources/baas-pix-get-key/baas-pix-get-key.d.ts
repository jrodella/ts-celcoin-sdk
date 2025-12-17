export interface BaasPixGetKeyResponse {
}
export interface BaasPixGetKeyParams {
    payerId?: string;
    key: string;
}
export declare class BaasPixGetKeyResource {
    protected static resourceUrl: string;
    static initiate(token: string, params: BaasPixGetKeyParams): Promise<any>;
}
