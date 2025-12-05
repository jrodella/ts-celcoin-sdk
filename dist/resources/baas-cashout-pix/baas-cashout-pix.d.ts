import { AxiosResponse } from "axios";
export declare class BaasCashoutPixResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasCashoutPixParams): Promise<AxiosResponse<BaasCashoutPixResponse, any>>;
}
export interface DebitParty {
    account: string;
    branch: string;
    taxId: string;
    name: string;
    accountType: string;
}
export interface CreditParty {
    bank: string;
    key: string | null;
    account: string;
    branch: string;
    taxId: string;
    name: string;
    accountType: string;
}
export interface Body {
    id: string;
    amount: number;
    clientCode: string;
    transactionIdentification: string | null;
    endToEndId: string;
    initiationType: string;
    paymentType: string;
    urgency: string;
    transactionType: string;
    debitParty: DebitParty;
    creditParty: CreditParty;
    remittanceInformation: string;
}
export interface BaasCashoutPixResponse {
    status: string;
    version: string;
    body: Body;
}
export declare enum InitiationTypes {
    DICT = "DICT",
    MANUAL = "MANUAL",
    STATIC_QRCODE = "STATIC_QRCODE",
    DYNAMIC_QRCODE = "DYNAMIC_QRCODE"
}
export declare enum UrgencyTypes {
    HIGH = "HIGH",
    NORMAL = "NORMAL"
}
export declare enum PaymentTypes {
    IMMEDIATE = "IMMEDIATE",
    FRAUD = "FRAUD",
    SCHEDULED = "SCHEDULED"
}
export declare type BaasCashoutPixParams = {
    amount: number;
    clientCode: string;
    paymentType?: PaymentTypes;
    debitParty?: {
        account: string;
    };
    remittanceInformation?: string;
    urgency?: UrgencyTypes;
    transactionType?: string;
} & ({
    creditParty?: {
        key?: string;
        account: string;
        name: string;
        taxId: string;
        accountType: string;
        branch: string;
        bank: string;
    };
    initiationType: InitiationTypes.MANUAL;
    endToEndId?: string;
    transactionIdentification?: string;
} | {
    initiationType?: InitiationTypes.STATIC_QRCODE | InitiationTypes.DYNAMIC_QRCODE;
    endToEndId: string;
    creditParty: {
        key: string;
        account: string;
        name: string;
        taxId: string;
        accountType: string;
        branch: string;
        bank: string;
    };
    transactionIdentification: string;
} | {
    initiationType?: InitiationTypes.DICT;
    endToEndId: string;
    creditParty: {
        key: string;
        account: string;
        name: string;
        taxId: string;
        accountType: string;
        branch: string;
        bank: string;
    };
    transactionIdentification?: string;
});
