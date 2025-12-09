export declare enum BaasWebhookEntity {
    ONBOARDING_CREATE = 'onboarding-create',
    PIX_PAYMENT_OUT = 'pix-payment-out',
    PIX_PAYMENT_IN = 'pix-payment-in',
    PIX_REVERSAL_IN = 'pix-reversal-in',
    PIX_REVERSAL_OUT = 'pix-reversal-out',
    SPB_TRANSFER_OUT_TED = 'spb-transfer-out',
    SPB_TRANSFER_IN_TED = 'spb-transfer-in',
    SPB_REVERSAL_OUT_TED = 'spb-reversal-out',
    SPB_REVERSAL_IN_TED = 'spb-reversal-in',
    VEHICLE_DEBTS_RECEIPT = 'vehicledebts-receipt',
    VEHICLE_DEBTS_CONSULT = 'vehicledebts-consult',
    VEHICLE_DEBTS = 'vehicledebts',
    TOPUP = 'topup',
    SLC_PAYMENT_IN = 'slc-payment-in',
    PIX_REVERSAL_OUT_GALAX = 'pix-reversal-out-galax',
    PIX_PAYMENT_IN_GALAX = 'pix-payment-in-galax',
    PIX_DICT_CLAIM_WAITING = 'pix-dict-claim-waiting',
    PIX_DICT_CLAIM_OPEN = 'pix-dict-claim-open',
    PIX_DICT_CLAIM_CONFIRMED = 'pix-dict-claim-confirmed',
    PIX_DICT_CLAIM_COMPLETED = 'pix-dict-claim-completed',
    PIX_DICT_CLAIM_CANCELLED = 'pix-dict-claim-cancelled',
    ONBOARDING_PROPOSAL = 'onboarding-proposal',
    ONBOARDING_FILE = 'onboarding-file',
    ONBOARDING_DOCUMENTSCOPY = 'onboarding-documentscopy',
    ONBOARDING_BACKGROUNDCHECK = 'onboarding-backgroundcheck',
    LIMIT = 'limit',
    KYC = 'kyc',
    JUDICIAL_MOVEMENT_OUT = 'judicial-movement-out',
    JUDICIAL_MOVEMENT_IN = 'judicial-movement-in',
    INTERNAL_TRANSFER_IN = 'internal-transfer-in',
    INTERNAL_TRANSFER_OUT = 'internal-transfer-out',
    CHARGE_IN = 'charge-in',
    CHARGE_CREATE = 'charge-create',
    CHARGE_CANCELED = 'charge-canceled',
    BILLPAYMENT = 'billpayment',
    BILLPAYMENT_OCCURRENCE = 'billpayment-occurrence',
    ACCOUNT_MIGRATION = 'account-migration'
}

export interface BaasWebhookAuth {
    login?: string;
    pwd?: string;
    type?: string;
}

export interface BaasWebhookRegisterParams {
    entity: BaasWebhookEntity;
    webhookUrl: string;
    auth?: BaasWebhookAuth;
}

export interface BaasWebhookEditParams {
    entity?: BaasWebhookEntity;
    webhookUrl: string;
    subscriptionId?: string;
    auth?: BaasWebhookAuth;
    active?: boolean;
}

export interface BaasWebhookResponse {
    status: string;
    version: string;
    body: any;
}

export declare class BaasWebhooksResource {
    static register(token: string, params: BaasWebhookRegisterParams): Promise<BaasWebhookResponse>;
    static list(token: string, entity?: BaasWebhookEntity, active?: boolean): Promise<BaasWebhookResponse>;
    static edit(token: string, entity: BaasWebhookEntity, params: BaasWebhookEditParams): Promise<BaasWebhookResponse>;
    static remove(token: string, entity: BaasWebhookEntity): Promise<any>;
    static listEntities(token: string): Promise<any>;
}