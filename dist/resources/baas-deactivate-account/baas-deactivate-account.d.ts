export interface BaasDeactivateAccountResponse {
}
export declare enum StatusType {
    BLOQUEADO = "BLOQUEADO",
    ATIVO = "ATIVO"
}
export interface BaasDeactivateAccountParams {
    account: string;
    status: StatusType;
    reason: string;
}
export declare class BaasDeactivateAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasDeactivateAccountParams): Promise<any>;
}
