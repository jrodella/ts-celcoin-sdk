export interface BaasGetAllAccountsParams {
    dateFrom: string;
    dateTo: string;
}
export declare class BaasGetAllAccountsResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasGetAllAccountsParams): Promise<any>;
}
