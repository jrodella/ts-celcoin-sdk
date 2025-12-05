import { AxiosResponse } from "axios";
export interface PixCreateQRCodeStaticResponse {
    transactionId: number;
    emvqrcps: string;
    transactionIdentification: string;
}
export interface PixCreateQRCodeStaticParams {
    transactionIdentification?: string;
    key: string;
    amount: number;
    merchant: {
        city: string;
        name: string;
        merchantCategoryCode: string;
        postalCode: string;
    };
    tags?: string[];
    additionalInformation?: string;
}
export declare class PixCreateQRCodeStaticResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateQRCodeStaticParams): Promise<AxiosResponse<PixCreateQRCodeStaticResponse, any>>;
}
