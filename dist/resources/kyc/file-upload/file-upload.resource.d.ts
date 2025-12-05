import { AxiosResponse } from "axios";
export declare class FileUploadParamsResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: FileUploadParams): Promise<AxiosResponse<FileUploadParamsResponse, any>>;
}
export interface FileUploadParamsResponse {
    status: string;
    message: string;
}
export interface FileUploadParams {
    front: any;
    verse?: any;
    documentNumber: string;
    fileType: FileTypes;
    cnpj?: string;
}
export declare enum FileTypes {
    RG = "RG",
    CNH = "CNH",
    RNE = "RNE",
    CARTAO_CNPJ = "CARTAO_CNPJ",
    CONTRATO_SOCIAL = "CONTRATO_SOCIAL",
    BALANCO = "BALANCO",
    FATURAMENTO = "FATURAMENTO",
    KYC_EXTERNO = "KYC_EXTERNO"
}
