export interface PixInitiateTransactionUsingKeyParams {
    payerId: string;
    clientCode: string;
    key: string;
}
export declare class PixInitiateTransactionUsingKeyResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixInitiateTransactionUsingKeyParams): Promise<any>;
}
