import { AxiosResponse } from "axios";
export declare class BaasGetPixStatusResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasGetPixStatusParams): Promise<AxiosResponse<BaasGetPixStatusResponse, any>>;
}
export interface BaasGetPixStatusResponse {
    status: string;
    version: string;
    body: {
        id: string;
        amount: number;
        clientCode: string;
        transactionIdentification: string;
        endToEndId: string;
        initiationType: string;
        paymentType: string;
        urgency: string;
        transactionType: string;
        debitParty: {
            account: string;
            branch: string;
            taxId: string;
            name: string;
            accountType: string;
        };
        creditParty: {
            bank: string;
            key: string;
            account: string;
            branch: string;
            taxId: string;
            name: string;
            accountType: string;
        };
        remittanceInformation: string;
        error?: {
            errorCode: string;
            message: string;
        };
    };
}
export interface BaasGetPixStatusParams {
    id?: string;
    endtoendId?: string;
    clientCode?: string;
}
