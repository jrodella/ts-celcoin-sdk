export interface PixCreateQRCodeDynamicResponse {
}
export interface PixCreateQRCodeDynamicParams {
    clientRequestId: string;
    key: string;
    amount: string;
    merchant: {
        city: string;
        name: string;
        merchantCategoryCode: number;
        postalCode: string;
    };
    payerName?: string;
    payerCPF?: string;
    payerCNPJ?: string;
    payerQuestion?: string;
    additionalInformation?: {
        key: string;
        value: string;
    }[];
    expiration?: number;
}
export declare class PixCreateQRCodeDynamicResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateQRCodeDynamicParams): Promise<any>;
}
