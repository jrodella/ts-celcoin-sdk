export interface BaasVerifyPixTransactionResponse {
}
export interface BaasVerifyPixTransactionParams {
    id?: string;
    clientCode?: string;
    endToEndId?: string;
}
export declare class BaasVerifyPixTransactionResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasVerifyPixTransactionParams): Promise<any>;
}
