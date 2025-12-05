export interface PixCreateCollectionResourceResponse {
}
export interface PixCreateCollectionParams {
    clientRequestId: string;
    calendar: {
        expiration: string;
    };
    key: string;
    debtor: {
        cpf: string;
        name: string;
    };
    additionalInformation: {
        key: string;
        value: string;
    }[];
    locationId: number;
    payerQuestion: string;
    amount: {
        changeType: number;
        original: string;
    };
}
export declare class PixCreateCollectionResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixCreateCollectionParams): Promise<any>;
}
