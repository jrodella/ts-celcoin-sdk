export interface BaasCreateBusinessAccountResourceResponse {
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
export interface Owner {
    documentNumber: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    motherName: string;
    socialName?: string;
    birthDate: string;
    address?: Address;
    isPoliticallyExposedPerson: Boolean;
}
export interface BaasCreateBusinessAccountParams {
    clientCode: string;
    accountOnboardingType: string;
    documentNumber: string;
    contactNumber: string;
    businessEmail: string;
    businessName: string;
    tradingName: string;
    owner: Array<Owner>;
    businessAddress: Address;
}
export declare class BaasCreateBusinessAccountResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasCreateBusinessAccountParams): Promise<any>;
}
