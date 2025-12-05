export interface PixCreateTransactionUsingAccountResourceResponse {
}
export declare enum InitiationTypes {
    DICT = "DICT",
    MANUAL = "MANUAL"
}
export interface PixCreateTransactionUsingAccountParams {
    clientCode: string;
    amount: number;
    creditParty: {
        key?: string;
        account: string;
        name: string;
        taxId: string;
        accountType: string;
        branch: string;
        bank: string;
    };
    debitParty: {
        name: string;
        account: string;
        branch: string;
        taxId: string;
        accountType: string;
    };
    remittanceInformation: string;
    transactionType?: string;
    initiationType?: InitiationTypes;
}
export declare class PixCreateTransactionUsingAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateTransactionUsingAccountParams): Promise<any>;
}
