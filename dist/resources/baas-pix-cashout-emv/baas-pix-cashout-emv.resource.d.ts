import { AxiosResponse } from "axios";

export interface BaasPixCashoutCreditParty {
    bank: string;
    key: string;
    account?: string;
    branch?: string;
    taxId?: string;
    name?: string;
    accountType?: string;
}

export interface BaasPixCashoutDebitParty {
    account: string;
    branch?: string;
    taxId?: string;
    name?: string;
    accountType?: string;
}

export interface BaasPixCashoutEmvParams {
    clientCode: string;
    amount: number;

    // Objetos estruturados
    debitParty?: BaasPixCashoutDebitParty;
    creditParty?: BaasPixCashoutCreditParty;

    // Campos de controle e identificação
    transactionIdentification?: string;
    endToEndId?: string;
    initiationType?: string; // ex: 'STATIC_QRCODE' | 'DYNAMIC_QRCODE'
    paymentType?: string;    // ex: 'IMMEDIATE'
    urgency?: string;        // ex: 'HIGH'
    transactionType?: string;// ex: 'TRANSFER'

    description?: string;
    remittanceInformation?: string;

    // Mantidos para compatibilidade com chamadas legadas (se houver)
    emv?: string;
    account?: string;
}

export interface BaasPixCashoutEmvResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasPixCashoutEmvResource {
    static create(token: string, params: BaasPixCashoutEmvParams): Promise<AxiosResponse<BaasPixCashoutEmvResponse> | any>;
}