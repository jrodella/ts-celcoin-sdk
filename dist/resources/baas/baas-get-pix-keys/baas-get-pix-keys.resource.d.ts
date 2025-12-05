import { AxiosResponse } from "axios";
export declare class BaasGePixKeysResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasGetPixKeysParams): Promise<AxiosResponse<BaasGetPixKeysResponse, any>>;
}
export interface BaasGetPixKeysResponse {
    version: string;
    status: string;
    body: {
        listKeys: Array<{
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
        }>;
    };
}
export declare type BaasGetPixKeysParams = {
    account: string;
};
