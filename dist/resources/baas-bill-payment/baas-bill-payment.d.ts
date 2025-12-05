import { AxiosResponse } from "axios";

export interface BarCodeInfo {
    type?: number;
    digitable?: string;
    barCode?: string;
}

export interface BaasBillPaymentParams {
    clientRequestId: string;
    amount: number;
    account: string;
    barCodeInfo: BarCodeInfo;
    description?: string;
    transactionIdAuthorize?: number;
}

export interface BaasBillPaymentResponse {
    status: string;
    version: string;
    body: any; // A estrutura exata do corpo pode variar, 'any' permite flexibilidade
}

export declare class BaasBillPaymentResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasBillPaymentParams): Promise<AxiosResponse<BaasBillPaymentResponse, any>>;
}