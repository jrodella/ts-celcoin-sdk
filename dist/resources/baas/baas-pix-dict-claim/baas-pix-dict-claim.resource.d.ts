import { KeyTypes } from "../../baas-pix-create-key/baas-pix-create-key";
import { AxiosResponse } from "axios";
export declare class BaasPixDictClaimResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasPixDictClaimParams): Promise<AxiosResponse<BaasPixDictClaimResponse, any>>;
}
export interface BaasPixDictClaimResponse {
    version: string;
    status: string;
    body: {
        id: string;
        claimType: string;
        key: string;
        keyType: string;
        claimerAccount: {
            participant: string;
            branch: string;
            account: string;
            accountType: string;
        };
        claimer: {
            personType: string;
            taxId: string;
            name: string;
        };
        donorParticipant: string;
        createTimestamp: string;
        completionPeriodEnd: string;
        resolutionPeriodEnd: string;
        lastModified: string;
        confirmReason: string;
        cancelReason: string;
        cancelledBy: string;
        donorAccount: {
            account: string;
            branch: string;
            taxId: string;
            name: string;
        };
    };
}
export declare type BaasPixDictClaimParams = {
    key: string;
    keyType: KeyTypes;
    account: string;
    claimType: ClaimTypes;
};
export declare enum ClaimTypes {
    PORTABILITY = "PORTABILITY",
    OWNERSHIP = "OWNERSHIP"
}
