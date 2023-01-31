import { TAccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
    public static TABLE_ACCOUNTS = "accounts"

    public async getAccounts (q?: string) {
        let accountsDB

        if (q) {
            const result: TAccountDB[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
            .where("name", "LIKE", `%${q}%`)
            accountsDB = result
        } else {
            const result: TAccountDB[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)
            accountsDB = result
        }

        return accountsDB
    }
}