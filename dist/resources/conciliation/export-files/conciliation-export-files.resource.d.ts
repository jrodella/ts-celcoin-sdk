export interface ConciliationExportFilesResourceResponse {
}
export interface ConciliationExportFilesParams {
    fileType: number;
    accountdate: string;
    page?: number;
    quantity?: number;
}
export declare class ConciliationExportFilesResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: ConciliationExportFilesParams): Promise<any>;
}
