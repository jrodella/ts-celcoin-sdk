export interface PixCreateTransactionReversalResourceResponse {
}
export interface PixCreateTransactionReversalParams {
    transactionId: string;
    reason: string;
    amount: number;
    clientCode?: string;
    additionalInformation?: string;
    reversalDescription?: string;
}
export declare class PixCreateTransactionReversalResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateTransactionReversalParams): Promise<any>;
}
