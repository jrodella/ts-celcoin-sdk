import { AxiosResponse } from "axios";
import { Reasons } from "../../../Enums/Reasons";
export declare class BaasPixDictCancelClaimResource {
    protected static resourceUrl: string;
    private static getConfig;
    static initiate(token: string, params: BaasPixDictCancelClaimParams): Promise<AxiosResponse<BaasPixDictCancelClaimResponse, any>>;
}
export interface BaasPixDictCancelClaimResponse {
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
        cancelledBy: string;
        cancelReason: string;
    };
}
export declare type BaasPixDictCancelClaimParams = {
    id: string;
    reason: Reasons;
};
