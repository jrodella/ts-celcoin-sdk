import { AxiosResponse } from "axios";

export interface BaasGetBalanceParams {
    account: string;
    documentNumber: string;
}

export interface BaasGetBalanceResponse {
    status: string;
    version: string;
    body: {
        amount: number;
        platformAmount?: number;
    };
}

export declare class BaasGetBalanceResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasGetBalanceParams): Promise<AxiosResponse<BaasGetBalanceResponse, any>>;
}