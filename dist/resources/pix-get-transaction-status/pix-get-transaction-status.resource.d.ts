export interface PixGetTransactionStatusParams {
    transactionId?: string;
    endtoendId?: string;
    clientCode?: string;
}
export declare class PixGetTransactionStatusResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixGetTransactionStatusParams): Promise<any>;
}
