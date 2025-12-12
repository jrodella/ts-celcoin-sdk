import { AxiosResponse } from "axios";

export interface BarCodeAuthInfo {
    type: number; // 0 = Linha Digitável, 1 = Código de Barras
    digitable?: string;
    barCode?: string;
}

export interface BaasBillPaymentAuthorizeParams {
    barCode: BarCodeAuthInfo;
    externalTerminal: string;
}

export interface BaasBillPaymentAuthorizeResponse {
    assignor: string;
    registerData?: {
        documentRecipient: string;
        documentPayer: string;
        payer: string;
        recipient: string;
        payDueDate: string;
    };
    settleDate: string;
    dueDate: string;
    endHour: string;
    infos: any[];
    nextSettle: string;
    digitable: string;
    transactionId: number;
    value: number;
    maxValue?: number;
    minValue?: number;
    valueWithDiscount?: number;
    valueWithAdditional?: number;
    errorCode?: string;
    message?: string;
    status?: string;
}

export declare class BaasBillPaymentAuthorizeResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasBillPaymentAuthorizeParams): Promise<AxiosResponse<BaasBillPaymentAuthorizeResponse, any>>;
}