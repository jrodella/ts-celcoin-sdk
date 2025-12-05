/// <reference types="node" />
export interface ConfigurationData {
    url?: string;
    client_id?: string;
    client_secret?: string;
    cert?: Buffer;
    key?: Buffer;
    passphrase?: string;
}
export declare class Configuration {
    static url?: string;
    static client_id?: string;
    static client_secret?: string;
    static cert?: Buffer;
    static key?: Buffer;
    static passphrase?: string;
    static Init(data: ConfigurationData): void;
}
