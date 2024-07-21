import { HandledSymbol } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_Deposit_History {
  export type Parameters = {
    symbol: HandledSymbol,
    fromTimestamp: string,
    toTimestamp?: string,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    address: string,
    amount: string,
    fee: string,
    status: 'EXECUTED',
    symbol: HandledSymbol,
    timestamp: string,
    txHash: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const account_deposit_history = async (keys: APIKeys, params: Account_Deposit_History.Parameters): Promise<Account_Deposit_History.Response> => {
  const r: Account_Deposit_History.Request = {
    method: 'GET',
    path: '/v1/account/deposit/history',
    params,
  };

  return await request(keys, r) as Account_Deposit_History.Response;
}
