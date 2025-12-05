import { AxiosResponse } from "axios";
export interface BaasPixCreateKeyResponse {
    version: string;
    status: string;
    body: {
        keyType: string;
        key: string;
        account: {
            participant: string;
            branch: string;
            account: string;
            accountType: string;
            createDate: string;
        };
        owner: {
            type: string;
            documentNumber: string;
            name: string;
        };
    };
}
export declare enum KeyTypes {
    EVP = "EVP",
    CPF = "CPF",
    CNPJ = "CNPJ",
    EMAIL = "EMAIL",
    PHONE = "PHONE"
}
export interface BaasPixCreateKeyParams {
    account: string;
    keyType: KeyTypes;
    key?: string;
}
export declare class BaasPixCreateKeyResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasPixCreateKeyParams): Promise<AxiosResponse<BaasPixCreateKeyResponse, any>>;
}
