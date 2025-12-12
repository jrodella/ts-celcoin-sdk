import { AxiosResponse } from "axios";

// Tipos para Authorize
export interface BarCodeAuthInfo {
    type: number;
    digitable?: string;
    barCode?: string;
}

export interface BaasBillPaymentAuthorizeParams {
    barCode: BarCodeAuthInfo;
    externalTerminal: string;
    externalNSU?: number;
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

// Tipos para Payment
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
    tags?: any[];
}

// Tipos para Status
export interface BaasBillPaymentStatusParams {
    id?: string;
    clientRequestId?: string;
}

export interface BaasBillPaymentResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasBillPaymentResource {
    protected static resourceUrl: string;
    private static getConfig;

    // Método Pagamento
    static initiate(token: string, params: BaasBillPaymentParams): Promise<AxiosResponse<BaasBillPaymentResponse, any>>;

    // Método Status
    static status(token: string, params: BaasBillPaymentStatusParams): Promise<AxiosResponse<BaasBillPaymentResponse, any>>;

    // Método Authorize (Consulta Legado)
    static authorize(token: string, params: BaasBillPaymentAuthorizeParams): Promise<AxiosResponse<BaasBillPaymentAuthorizeResponse, any>>;
}