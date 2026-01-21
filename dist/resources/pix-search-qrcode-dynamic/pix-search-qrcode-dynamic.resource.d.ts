export interface PixSearchQRCodeDynamicParams {
    transactionIdentification?: string;
    clientRequestId?: string;
}

export declare class PixSearchQRCodeDynamicResource {
    static resourceUrl: string;
    static search(token: string, params: PixSearchQRCodeDynamicParams): Promise<any>;
}
