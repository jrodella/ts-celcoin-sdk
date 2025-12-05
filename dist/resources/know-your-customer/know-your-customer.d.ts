export interface KnowYourCustomerResponse {
}
export interface KnowYourCustomerParams {
    cnpj: string;
    documentnumber: string;
    filetype: string;
    file: string;
}
export declare class KnowYourCustomerResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: KnowYourCustomerParams): Promise<any>;
}
