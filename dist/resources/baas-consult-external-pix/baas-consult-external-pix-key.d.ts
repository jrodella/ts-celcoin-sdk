export interface BaasConsultExternalPixKeyResponse {
    status: string;
    body: {
        keyType: string;
        key: string;
        account: {
            participant: string;
            branch: string;
            account: string;
            accountType: string;
            createDate: string;
        };
        owner: {
            type: string;
            documentNumber: string;
            name: string;
        };
        endtoEndId: string;
        statistics: {
            lastUpdated: string;
            counters: [
                {
                    type: string;
                    by: string;
                    d3: string;
                    d30: string;
                    m6: string;
                }
            ];
        };
    };
    version: string;
}
export interface BaasConsultExternalPixKeyParams {
    account: string;
    key: string;
}
export declare class BaasConsultExternalPixKeyResource {
    private static resourceUrl;
    private static getConfig;
    static initiate(token: string, params: BaasConsultExternalPixKeyParams): Promise<any>;
}
