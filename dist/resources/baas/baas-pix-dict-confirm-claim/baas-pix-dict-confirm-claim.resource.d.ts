import { AxiosResponse } from "axios";
import { Reasons } from "../../../Enums/Reasons";
export declare class BaasPixDictConfirmClaimResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasPixDictConfirmClaimParams): Promise<AxiosResponse<BaasPixDictConfirmClaimResponse, any>>;
}
export interface BaasPixDictConfirmClaimResponse {
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
    };
}
export declare type BaasPixDictConfirmClaimParams = {
    id: string;
    reason: Reasons;
};
