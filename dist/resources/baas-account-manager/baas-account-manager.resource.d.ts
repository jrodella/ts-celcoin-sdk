import { Address } from "../baas-create-business-account/baas-create-business-account";

export interface BaasAccountManagerOwner {
    documentNumber: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    motherName: string;
    socialName?: string;
    birthDate: string;
    address?: Address;
    isPoliticallyExposedPerson: boolean;
}

export interface BaasUpdateNaturalPersonParams {
    phoneNumber: string;
    email: string;
    socialName: string;
    address: Address;
    isPoliticallyExposedPerson: boolean;
}

export interface BaasUpdateBusinessParams {
    contactNumber: string;
    businessEmail: string;
    owners: BaasAccountManagerOwner[];
    businessAddress: Address;
}

export interface BaasAccountResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasAccountManagerResource {
    protected static resourceUrl: string;
    static updateNaturalPerson(token: string, account: string, documentNumber: string, data: BaasUpdateNaturalPersonParams): Promise<BaasAccountResponse>;
    static updateBusiness(token: string, account: string, documentNumber: string, data: BaasUpdateBusinessParams): Promise<BaasAccountResponse>;
    static getIncomeReport(token: string, account: string, calendarYear: string): Promise<any>;
}