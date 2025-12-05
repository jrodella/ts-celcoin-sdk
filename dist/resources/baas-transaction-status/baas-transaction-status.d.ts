export interface BaasTransactionStatusParams {
    id?: string;
    clientCode?: string;
    endToEndId?: string;
}
export declare class BaasTransactionStatusResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasTransactionStatusParams): Promise<any>;
}
