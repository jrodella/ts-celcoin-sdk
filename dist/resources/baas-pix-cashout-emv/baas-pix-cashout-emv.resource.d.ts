export interface BaasPixCashoutCreditParty {
    bank: string;
    key?: string;
    account?: string;
    branch?: string;
    taxId?: string;
    name?: string;
    accountType?: string;
}

export interface BaasPixCashoutEmvParams {
    clientCode: string;
    account: string;
    amount: number;
    emv: string;
    description?: string;
    creditParty: BaasPixCashoutCreditParty; // Novo campo
    transactionType?: string;
    initiationType?: string;
    urgency?: string;
}

export interface BaasPixCashoutEmvResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasPixCashoutEmvResource {
    static create(token: string, params: BaasPixCashoutEmvParams): Promise<any>;
}