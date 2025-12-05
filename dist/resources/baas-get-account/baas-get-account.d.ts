export interface BaasGetAccountParams {
    documentNumber: string;
}
export declare class BaasGetAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasGetAccountParams): Promise<any>;
}
