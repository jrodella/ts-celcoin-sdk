export interface BaasCloseAccountResponse {
    version: string;
    status: string;
}
export interface BaasCloseAccountParams {
    account: string;
    reason: string;
}
export declare class BaasCloseAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasCloseAccountParams): Promise<BaasCloseAccountResponse>;
}
