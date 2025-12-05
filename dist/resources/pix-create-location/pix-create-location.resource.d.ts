export interface PixCreateLocationResourceResponse {
}
export interface PixCreateLocationParams {
    clientRequestId: string;
    merchant: {
        city: string;
        name: string;
        merchantCategoryCode: number;
        postalCode: string;
    };
    type: string;
}
export declare class PixCreateLocationResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateLocationParams): Promise<any>;
}
