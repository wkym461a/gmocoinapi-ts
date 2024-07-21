import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_FiatWithdrawal_History {
  export type Parameters = {
    fromTimestamp: string,
    toTimestamp?: string,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    amount: string,
    fee: string,
    status: 'EXECUTED',
    symbol: 'JPY',
    timestamp: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const account_fiatWithdrawal_history = async (keys: APIKeys, params: Account_FiatWithdrawal_History.Parameters): Promise<Account_FiatWithdrawal_History.Response> => {
  const r: Account_FiatWithdrawal_History.Request = {
    method: 'GET',
    path: '/v1/account/fiatWithdrawal/history',
    params,
  };

  return await request(keys, r) as Account_FiatWithdrawal_History.Response;
}
