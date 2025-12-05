export interface BaasTransactionCreateParams {
    amount: number;
    clientRequestId: string;
    debitParty: {
        account: string;
    };
    creditParty: {
        account: string;
    };
    description?: string;
}
export declare class BaasTransactionCreateResource {
    protected static resourceUrl: string;
    private static agent;
    private static createCustomAgent;
    private static getConfig;
    static initiate(token: string, params: BaasTransactionCreateParams): Promise<any>;
}
