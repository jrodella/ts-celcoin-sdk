export interface BaasPixCashoutEmvParams {
    clientCode: string;
    account: string;
    amount: number;
    emv: string;
    description?: string;
}

export interface BaasPixCashoutEmvResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasPixCashoutEmvResource {
    static create(token: string, params: BaasPixCashoutEmvParams): Promise<any>;
}