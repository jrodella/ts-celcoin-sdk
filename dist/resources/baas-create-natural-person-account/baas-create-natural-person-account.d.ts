import { AxiosResponse } from "axios";
export interface BaasCreateNaturalPersonAccountResponse {
    version: string;
    status: string;
    body: {
        onboardingId: string;
    };
}
export interface Address {
    postalCode: string;
    street: String;
    number?: String;
    addressComplement?: String;
    neighborhood: String;
    city: String;
    state: String;
    longitude?: String;
    latitude?: String;
}
export interface BaasCreateNaturalPersonAccountParams {
    clientCode: string;
    accountOnboardingType: string;
    documentNumber: string;
    phoneNumber: string;
    email: string;
    motherName: string;
    fullName: string;
    socialName?: string;
    birthDate: string;
    address: Address;
    isPoliticallyExposedPerson: Boolean;
}
export declare class BaasCreateNaturalPersonAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasCreateNaturalPersonAccountParams): Promise<AxiosResponse<BaasCreateNaturalPersonAccountResponse, any>>;
}
