export declare enum BaasReleaseType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}

export interface BaasAccountReleaseParams {
    clientCode: string;
    amount: number;
    type: BaasReleaseType;
    description?: string;
}

export interface BaasWalletTransactionResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasWalletTransactionsResource {
    protected static resourceUrl: string;
    static createRelease(token: string, account: string, data: BaasAccountReleaseParams): Promise<any>;
}