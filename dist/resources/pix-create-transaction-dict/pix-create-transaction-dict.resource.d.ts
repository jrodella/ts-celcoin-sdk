export interface PixCreateTransactionDictResourceResponse {
}
export declare enum InitiationTypes {
    DICT = "DICT",
    MANUAL = "MANUAL"
}
export interface PixCreateTransactionDictParams {
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
export declare class PixCreateTransactionDictResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateTransactionDictParams): Promise<any>;
}
