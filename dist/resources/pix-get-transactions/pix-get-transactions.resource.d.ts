export interface PixGetTransactionsParams {
    account?: string;
    documentNumber?: string;
    dateFrom?: string;
    dateTo?: string;
    limitPerPage?: string;
    page?: string;
}
export declare class PixGetTransactionsResource {
    protected static resourceUrl: string;
    static initiate(token: string, params: PixGetTransactionsParams): Promise<any>;
}
