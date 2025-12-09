import { AxiosResponse } from "axios";

export interface BaasBilletDebtor {
    name: string;
    document: string;
    postalCode: string;
    publicArea: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface BaasBilletReceiver {
    document: string;
    account: string;
}

export interface BaasBilletInstruction {
    fine?: number;
    interest?: number;
    discount?: {
        amount: number;
        modality: string;
        limitDate: string;
    };
}

export interface BaasBilletSplit {
    account?: string;
    document?: string;
    percent?: number;
    amount?: number;
    aggregatePayment?: boolean;
}

export interface BaasBilletCreateParams {
    externalId: string;
    expirationAfterPayment: number;
    dueDate: string;
    amount: number;
    debtor: BaasBilletDebtor;
    receiver: BaasBilletReceiver;
    instructions?: BaasBilletInstruction;
    split?: BaasBilletSplit[];
}

export interface BaasBilletGetParams {
    transactionId?: string;
    externalId?: string;
}

export interface BaasBilletResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasBilletResource {
    protected static resourceUrl: string;
    private static getConfig;
    static create(token: string, params: BaasBilletCreateParams): Promise<BaasBilletResponse>;
    static get(token: string, params: BaasBilletGetParams): Promise<BaasBilletResponse>;
    static cancel(token: string, transactionId: string): Promise<any>;
    static pdf(token: string, transactionId: string): Promise<any>;
}