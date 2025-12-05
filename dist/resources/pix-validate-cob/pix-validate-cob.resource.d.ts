export interface PixValidateCobResourceResponse {
}
export interface PixValidateCobParams {
    url: string;
}
export declare class PixValidateCobResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixValidateCobParams): Promise<any>;
}
