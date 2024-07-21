import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_FiatDeposit_History {
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

export const account_fiatDeposit_history = async (keys: APIKeys, params: Account_FiatDeposit_History.Parameters): Promise<Account_FiatDeposit_History.Response> => {
  const r: Account_FiatDeposit_History.Request = {
    method: 'GET',
    path: '/v1/account/fiatDeposit/history',
    params,
  };

  return await request(keys, r) as Account_FiatDeposit_History.Response;
}
