"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const pix_get_transaction_status_resource_1 = require("./resources/pix-get-transaction-status/pix-get-transaction-status.resource");
const pix_validate_cob_resource_1 = require("./resources/pix-validate-cob/pix-validate-cob.resource");
const pix_create_transaction_dict_resource_1 = require("./resources/pix-create-transaction-dict/pix-create-transaction-dict.resource");
const auth_dto_1 = require("./resources/auth/auth.dto");
const auth_resource_1 = require("./resources/auth/auth.resource");
const pix_initiate_transaction_using_key_resource_1 = require("./resources/pix-initiate-transaction-using-key/pix-initiate-transaction-using-key.resource");
const pix_initiate_transaction_using_emv_resource_1 = require("./resources/pix-initiate-transaction-using-emv/pix-initiate-transaction-using-emv.resource");
const pix_create_transaction_using_account_resource_1 = require("./resources/pix-create-transaction-using-account/pix-create-transaction-using-account.resource");
const pix_create_transaction_reversal_resource_1 = require("./resources/pix-create-transaction-reversal/pix-create-transaction-reversal.resource");
const pix_create_location_resource_1 = require("./resources/pix-create-location/pix-create-location.resource");
const pix_create_collection_resource_1 = require("./resources/pix-create-collection/pix-create-collection.resource");
const pix_get_webhooks_by_event_resource_1 = require("./resources/pix-get-webhooks-by-event/pix-get-webhooks-by-event.resource");
const baas_create_business_account_1 = require("./resources/baas-create-business-account/baas-create-business-account");
const baas_pix_create_key_1 = require("./resources/baas-pix-create-key/baas-pix-create-key");
const baas_pix_get_key_1 = require("./resources/baas-pix-get-key/baas-pix-get-key");
const baas_cashout_pix_1 = require("./resources/baas-cashout-pix/baas-cashout-pix");
const baas_close_account_1 = require("./resources/baas-close-account/baas-close-account");
const baas_deactivate_account_1 = require("./resources/baas-deactivate-account/baas-deactivate-account");
const know_your_customer_1 = require("./resources/know-your-customer/know-your-customer");
const conciliation_export_files_resource_1 = require("./resources/conciliation/export-files/conciliation-export-files.resource");
const baas_get_account_1 = require("./resources/baas-get-account/baas-get-account");
const baas_get_all_accounts_1 = require("./resources/baas-get-all-accounts/baas-get-all-accounts");
const pix_get_participants_1 = require("./resources/pix-get-participants/pix-get-participants");
const pix_create_qrcode_dynamic_1 = require("./resources/pix-create-qrcode-dynamic/pix-create-qrcode-dynamic");
const pix_search_qrcode_dynamic_resource_1 = require("./resources/pix-search-qrcode-dynamic/pix-search-qrcode-dynamic.resource");
const pix_cancel_qrcode_dynamic_resource_1 = require("./resources/pix-cancel-qrcode-dynamic/pix-cancel-qrcode-dynamic.resource");
const baas_consult_pix_key_1 = require("./resources/baas-consult-pix-key/baas-consult-pix-key");
const baas_verify_account_status_1 = require("./resources/baas-verify-account-status/baas-verify-account-status");
const baas_consult_external_pix_key_1 = require("./resources/baas-consult-external-pix/baas-consult-external-pix-key");
const baas_verify_pix_transaction_1 = require("./resources/baas-verify-pix-transaction/baas-verify-pix-transaction");
const baas_create_natural_person_account_1 = require("./resources/baas-create-natural-person-account/baas-create-natural-person-account");
const pix_get_transactions_resource_1 = require("./resources/pix-get-transactions/pix-get-transactions.resource");
const file_upload_resource_1 = require("./resources/kyc/file-upload/file-upload.resource");
const baas_delete_pix_key_resource_1 = require("./resources/baas/baas-delete-pix-key/baas-delete-pix-key.resource");
const baas_get_pix_keys_resource_1 = require("./resources/baas/baas-get-pix-keys/baas-get-pix-keys.resource");
const baas_transaction_status_1 = require("./resources/baas-transaction-status/baas-transaction-status");
const pix_create_qrcode_static_1 = require("./resources/pix-create-qrcode-static/pix-create-qrcode-static");
const baas_pix_dict_confirm_claim_resource_1 = require("./resources/baas/baas-pix-dict-confirm-claim/baas-pix-dict-confirm-claim.resource");
const baas_pix_dict_claim_resource_1 = require("./resources/baas/baas-pix-dict-claim/baas-pix-dict-claim.resource");
const baas_pix_dict_cancel_claim_resource_1 = require("./resources/baas/baas-pix-dict-cancel-claim/baas-pix-dict-cancel-claim.resource");
const baas_transaction_create_1 = require("./resources/baas-transaction-create/baas-transaction-create");
const baas_get_pix_status_resource_1 = require("./resources/baas/baas-get-pix-status/baas-get-pix-status.resource");
const baas_bill_payment_1 = require("./resources/baas-bill-payment/baas-bill-payment");
const baas_get_balance_1 = require("./resources/baas-get-balance/baas-get-balance");
const baas_pix_cashout_emv_resource_1 = require("./resources/baas-pix-cashout-emv/baas-pix-cashout-emv.resource");
const baas_pix_external_key_1 = require("./resources/baas-pix-external-key/baas-pix-external-key");
const baas_billet_resource_1 = require("./resources/baas-billet/baas-billet.resource");

class Client {
    static async createAuthToken() {
        const authResource = await auth_resource_1.AuthResource.getToken();
        const authDto = new auth_dto_1.AuthDto().createFromResource(authResource);
        return authDto;
    }
    static async PixInitiateTransactionUsingKey(token, params) {
        const pixInitiateTransactionUsingKeyResource = await pix_initiate_transaction_using_key_resource_1.PixInitiateTransactionUsingKeyResource.initiate(token, params);
        return pixInitiateTransactionUsingKeyResource;
    }
    static async PixInitiateTransactionUsingEmv(token, params) {
        const pixInitiateTransactionUsingEmvResource = await pix_initiate_transaction_using_emv_resource_1.PixInitiateTransactionUsingEmvResource.initiate(token, params);
        return pixInitiateTransactionUsingEmvResource;
    }
    static async PixCreateTransactionUsingAccount(token, params) {
        const pixCreateTransactionUsingAccountResource = await pix_create_transaction_using_account_resource_1.PixCreateTransactionUsingAccountResource.initiate(token, params);
        return pixCreateTransactionUsingAccountResource;
    }
    static async PixCreateTransactionDict(token, params) {
        const pixCreateTransactionDictResource = await pix_create_transaction_dict_resource_1.PixCreateTransactionDictResource.initiate(token, params);
        return pixCreateTransactionDictResource;
    }
    static async PixCreateTransactionReversal(token, params) {
        const pixCreateTransactionReversalResource = await pix_create_transaction_reversal_resource_1.PixCreateTransactionReversalResource.initiate(token, params);
        return pixCreateTransactionReversalResource;
    }
    static async PixCreateLocation(token, params) {
        const pixCreateLocationResource = await pix_create_location_resource_1.PixCreateLocationResource.initiate(token, params);
        return pixCreateLocationResource;
    }
    static async ConciliationExportFiles(token, params) {
        return await conciliation_export_files_resource_1.ConciliationExportFilesResource.initiate(token, params);
    }
    static async PixCreateCollection(token, params) {
        const pixCreateCollectionResource = await pix_create_collection_resource_1.PixCreateCollectionResource.initiate(token, params);
        return pixCreateCollectionResource;
    }
    static async PixCreateQRCodeDynamic(token, params) {
        const pixCreateQRCodeDynamicResource = await pix_create_qrcode_dynamic_1.PixCreateQRCodeDynamicResource.initiate(token, params);
        return pixCreateQRCodeDynamicResource;
    }
    static async PixSearchQRCodeDynamic(token, params) {
        const pixSearchQRCodeDynamicResource = await pix_search_qrcode_dynamic_resource_1.PixSearchQRCodeDynamicResource.search(token, params);
        return pixSearchQRCodeDynamicResource;
    }
    static async PixCancelQRCodeDynamic(token, transactionId) {
        const pixCancelQRCodeDynamicResource = await pix_cancel_qrcode_dynamic_resource_1.PixCancelQRCodeDynamicResource.cancel(token, transactionId);
        return pixCancelQRCodeDynamicResource;
    }
    static async PixCreateQRCodeStatic(token, params) {
        return await pix_create_qrcode_static_1.PixCreateQRCodeStaticResource.initiate(token, params);
    }
    static async PixGetParticipants(token) {
        const pixGetParticipantsResource = await pix_get_participants_1.PixGetParticipantsResource.initiate(token);
        return pixGetParticipantsResource;
    }
    static async PixGetWebhooksByEvent(token, params) {
        const pixGetWebhooksByEventResource = await pix_get_webhooks_by_event_resource_1.PixGetWebhooksByEventResource.initiate(token, params);
        return pixGetWebhooksByEventResource;
    }
    static async PixValidateCob(token, params) {
        if (params.url.startsWith('https://'))
            params.url = await encodeURIComponent(params.url.replace('https://', ''));
        const pixValidateCob = await pix_validate_cob_resource_1.PixValidateCobResource.initiate(token, params);
        return pixValidateCob;
    }
    static async PixGetTransactionStatus(token, params) {
        const pixGetWebhooksByEventResource = await pix_get_transaction_status_resource_1.PixGetTransactionStatusResource.initiate(token, params);
        return pixGetWebhooksByEventResource;
    }
    static async PixGetTransactions(token, params) {
        const pixGetTransactionsResource = await pix_get_transactions_resource_1.PixGetTransactionsResource.initiate(token, params);
        return pixGetTransactionsResource;
    }
    static async KycFileUploadDocument(token, params) {
        return await file_upload_resource_1.FileUploadParamsResource.initiate(token, params);
    }
    static async BaasCreateBusinessAccount(token, params) {
        const baasCreateBusinessAccountResource = await baas_create_business_account_1.BaasCreateBusinessAccountResource.initiate(token, params);
        return baasCreateBusinessAccountResource;
    }
    static async BaasCreateNaturalPersonAccount(token, params) {
        return await baas_create_natural_person_account_1.BaasCreateNaturalPersonAccountResource.initiate(token, params);
    }
    static async BaasPixCreateKey(token, params) {
        const baasPixCreateKeyResource = await baas_pix_create_key_1.BaasPixCreateKeyResource.initiate(token, params);
        return baasPixCreateKeyResource;
    }
    static async BassDeletePixKey(token, params) {
        return await baas_delete_pix_key_resource_1.BaasDeletePixKeyResource.initiate(token, params);
    }
    static async BassGetPixKeys(token, params) {
        return await baas_get_pix_keys_resource_1.BaasGePixKeysResource.initiate(token, params);
    }
    static async BaasPixGetKey(token, params) {
        const baasPixGetKeyResource = await baas_pix_get_key_1.BaasPixGetKeyResource.initiate(token, params);
        return baasPixGetKeyResource;
    }
    static async BaasCashoutPix(token, params) {
        const baasCashoutPixResource = await baas_cashout_pix_1.BaasCashoutPixResource.initiate(token, params);
        return baasCashoutPixResource;
    }
    static async BaasConsultPixKey(token, params) {
        const baasConsultPixKeyResource = await baas_consult_pix_key_1.BaasConsultPixKeyResource.initiate(token, params);
        return baasConsultPixKeyResource;
    }
    static async BaasConsultExternalPixKey(token, params) {
        const baasConsultExternalPixKeyResource = await baas_consult_external_pix_key_1.BaasConsultExternalPixKeyResource.initiate(token, params);
        return baasConsultExternalPixKeyResource;
    }
    static async BaasVerifyAccountStatus(token, params) {
        const baasVerifyAccountStatusResource = await baas_verify_account_status_1.BaasVerifyAccountStatusResource.initiate(token, params);
        return baasVerifyAccountStatusResource;
    }
    static async BaasVerifyPixTransaction(token, params) {
        const baasVerifyPixTransactionResource = await baas_verify_pix_transaction_1.BaasVerifyPixTransactionResource.initiate(token, params);
        return baasVerifyPixTransactionResource;
    }
    static async BaasCloseAccount(token, params) {
        const baasCloseAccountResource = await baas_close_account_1.BaasCloseAccountResource.initiate(token, params);
        return baasCloseAccountResource;
    }
    static async BaasDeactivateAccount(token, params) {
        const baasDeactivateAccountResource = await baas_deactivate_account_1.BaasDeactivateAccountResource.initiate(token, params);
        return baasDeactivateAccountResource;
    }
    static async KnowYourCustomer(token, params) {
        const knowYourCustomerResource = await know_your_customer_1.KnowYourCustomerResource.initiate(token, params);
        return knowYourCustomerResource;
    }
    static async BaasGetAccount(token, params) {
        const baasGetAccountResource = await baas_get_account_1.BaasGetAccountResource.initiate(token, params);
        return baasGetAccountResource;
    }
    static async BaasGetAllAccounts(token, params) {
        const baasGetAllAccountsResource = await baas_get_all_accounts_1.BaasGetAllAccountsResource.initiate(token, params);
        return baasGetAllAccountsResource;
    }
    static async BaasTransactionStatus(token, params) {
        const baasTransactionStatusResource = await baas_transaction_status_1.BaasTransactionStatusResource.initiate(token, params);
        return baasTransactionStatusResource;
    }
    static async BaasPixDictConfirmClaim(token, params) {
        return await baas_pix_dict_confirm_claim_resource_1.BaasPixDictConfirmClaimResource.initiate(token, params);
    }
    static async BaasPixDictCancelClaim(token, params) {
        return await baas_pix_dict_cancel_claim_resource_1.BaasPixDictCancelClaimResource.initiate(token, params);
    }
    static async BaasPixDictlaim(token, params) {
        return await baas_pix_dict_claim_resource_1.BaasPixDictClaimResource.initiate(token, params);
    }
    static async BaasTransactionCreate(token, params) {
        const baasTransactionCreateResource = await baas_transaction_create_1.BaasTransactionCreateResource.initiate(token, params);
        return baasTransactionCreateResource;
    }
    static async BaasGetPixStatus(token, params) {
        const baasGetPixStatusResource = await baas_get_pix_status_resource_1.BaasGetPixStatusResource.initiate(token, params);
        return baasGetPixStatusResource;
    }
    static async BaasBillPayment(token, params) {
        const baasBillPaymentResource = await baas_bill_payment_1.BaasBillPaymentResource.initiate(token, params);
        return baasBillPaymentResource;
    }
    static async BaasBillPaymentStatus(token, params) {
        const baasBillPaymentStatus = await baas_bill_payment_1.BaasBillPaymentResource.status(token, params);
        return baasBillPaymentStatus;
    }
    static async BaasBillPaymentAuthorize(token, params) {
        const baasBillPaymentAuthorizeResource = await baas_bill_payment_1.BaasBillPaymentResource.authorize(token, params);
        return baasBillPaymentAuthorizeResource;
    }
    static async BaasGetBalance(token, params) {
        const baasGetBalanceResource = await baas_get_balance_1.BaasGetBalanceResource.initiate(token, params);
        return baasGetBalanceResource;
    }
    static async BaasBilletCreate(token, params) {
        return await baas_billet_resource_1.BaasBilletResource.create(token, params);
    }
    static async BaasBilletGet(token, params) {
        return await baas_billet_resource_1.BaasBilletResource.get(token, params);
    }
    static async BaasBilletCancel(token, transactionId) {
        return await baas_billet_resource_1.BaasBilletResource.cancel(token, transactionId);
    }
    static async BaasBilletPdf(token, transactionId) {
        return await baas_billet_resource_1.BaasBilletResource.pdf(token, transactionId);
    }
    static async BaasAccountUpdateNaturalPerson(token, account, documentNumber, data) {
        return await baas_account_manager_resource_1.BaasAccountManagerResource.updateNaturalPerson(token, account, documentNumber, data);
    }
    static async BaasAccountUpdateBusiness(token, account, documentNumber, data) {
        return await baas_account_manager_resource_1.BaasAccountManagerResource.updateBusiness(token, account, documentNumber, data);
    }
    static async BaasAccountGetIncomeReport(token, account, calendarYear) {
        return await baas_account_manager_resource_1.BaasAccountManagerResource.getIncomeReport(token, account, calendarYear);
    }
    static async BaasWalletCreateRelease(token, account, data) {
        return await baas_wallet_transactions_resource_1.BaasWalletTransactionsResource.createRelease(token, account, data);
    }
    static async BaasWebhooksRegister(token, params) {
        return await baas_webhooks_resource_1.BaasWebhooksResource.register(token, params);
    }
    static async BaasWebhooksList(token, entity, active) {
        return await baas_webhooks_resource_1.BaasWebhooksResource.list(token, entity, active);
    }
    static async BaasWebhooksEdit(token, entity, params) {
        return await baas_webhooks_resource_1.BaasWebhooksResource.edit(token, entity, params);
    }
    static async BaasWebhooksRemove(token, entity) {
        return await baas_webhooks_resource_1.BaasWebhooksResource.remove(token, entity);
    }
    static async BaasWebhooksListEntities(token) {
        return await baas_webhooks_resource_1.BaasWebhooksResource.listEntities(token);
    }
    static async BaasPixCashoutEmv(token, params) {
        return await baas_pix_cashout_emv_resource_1.BaasPixCashoutEmvResource.create(token, params);
    }
    static async BaasPixExternalKey(token, account, key) {
        return await baas_pix_external_key_1.BaasPixExternalKeyResource.get(token, account, key);
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map