import { MarginCallStatus } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_Margin {
  export type Request = ReqType<{}, {}>;
  export type ResponseData = {
    actualProfitLoss: string,
    availableAmount: string,
    margin: string,
    marginCallStatus: MarginCallStatus,
    marginRatio: string,
    profitLoss: string,
    transferableAmount: string,
  };
  export type Response = ResType<ResponseData>;
}

export const account_margin = async (keys: APIKeys): Promise<Account_Margin.Response> => {
  const r: Account_Margin.Request = {
    method: 'GET',
    path: '/v1/account/margin',
  };

  return await request(keys, r) as Account_Margin.Response;
}
