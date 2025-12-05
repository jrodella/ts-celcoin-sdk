export interface PixInitiateTransactionUsingEmvResourceResponse {
}
export interface PixInitiateTransactionUsingEmvParams {
    clientCode: string;
    emv: string;
}
export declare class PixInitiateTransactionUsingEmvResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixInitiateTransactionUsingEmvParams): Promise<any>;
}
