export interface BaasVerifyAccountStatusResponse {
}
export interface BaasVerifyAccountStatusParams {
    onboardingId?: string;
    clientCode?: string;
}
export declare class BaasVerifyAccountStatusResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasVerifyAccountStatusParams): Promise<any>;
}
