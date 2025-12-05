export interface BaasConsultPixKeyResponse {
}
export interface BaasConsultPixKeyParams {
    account: string;
}
export declare class BaasConsultPixKeyResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasConsultPixKeyParams): Promise<any>;
}
