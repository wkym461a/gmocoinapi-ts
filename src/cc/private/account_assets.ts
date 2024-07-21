import { AssetSymbol } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_Assets {
  export type Request = ReqType<{}, {}>;
  export type ResponseData = {
    amount: string,
    available: string,
    conversionRate: string,
    symbol: AssetSymbol,
  }[];
  export type Response = ResType<ResponseData>;
}

export const account_assets = async (keys: APIKeys): Promise<Account_Assets.Response> => {
  const r: Account_Assets.Request = {
    method: 'GET',
    path: '/v1/account/assets',
  };

  return await request(keys, r) as Account_Assets.Response;
}
