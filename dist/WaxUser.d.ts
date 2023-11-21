import { Chain, SignTransactionResponse, User } from "universal-authenticator-library";
import { WaxJS } from "@waxio/waxjs/dist";
export declare class WaxUser extends User {
    readonly accountName: string;
    readonly requestPermission: string;
    private readonly pubKeys;
    private readonly isTemp;
    private readonly wax;
    private readonly chain;
    api: any;
    rpc: any;
    constructor(chain: Chain, userAccount: string, pubKeys: string[], isTemp: boolean, wax: WaxJS);
    /**
     * @param transaction  The transaction to be signed (a object that matches the RpcAPI structure).
     * @param options  Options for tapos fields
     */
    signTransaction(transaction: any, options: any): Promise<SignTransactionResponse>;
    signArbitrary(): Promise<string>;
    verifyKeyOwnership(): Promise<boolean>;
    getAccountName(): Promise<string>;
    getChainId(): Promise<string>;
    getKeys(): Promise<string[]>;
    getIsTemp(): Promise<boolean>;
}
