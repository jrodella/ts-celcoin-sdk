export interface PixGetWebhooksByEventParams {
    webhookEvent: 'CONFIRMED' | 'ERROR' | 'REVERTED' | 'PAID' | 'PAYMENT_REVERTED';
    dateFrom?: string;
    dateTo?: string;
    limit?: number;
    start?: number;
    onlyPending?: boolean;
}
export declare class PixGetWebhooksByEventResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: PixGetWebhooksByEventParams): Promise<any>;
}
