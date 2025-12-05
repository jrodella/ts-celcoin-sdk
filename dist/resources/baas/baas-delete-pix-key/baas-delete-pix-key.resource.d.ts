import { AxiosResponse } from "axios";
export declare class BaasDeletePixKeyResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasDeletePixKeyParams): Promise<AxiosResponse<BaasDeletePixKeyResponse, any>>;
}
export interface BaasDeletePixKeyResponse {
    version: string;
    status: string;
}
export declare type BaasDeletePixKeyParams = {
    account: string;
    key: string;
};
