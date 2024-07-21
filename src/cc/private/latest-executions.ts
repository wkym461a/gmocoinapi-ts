import { HandledSymbol, SettleType, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace LatestExecutions {
  export type Parameters = {
    symbol: HandledSymbol,
    page?: number,
    count?: number,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    pagination: {
      currentPage: number,
      count: number,
    },
    list: {
      executionId: number,
      orderId: number,
      positionId: number,
      symbol: HandledSymbol,
      side: TransactionSide,
      settleType: SettleType,
      price: string,
      lossGain: string,
      fee: string,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const latestExecutions = async (keys: APIKeys, params: LatestExecutions.Parameters): Promise<LatestExecutions.Response> => {
  const r: LatestExecutions.Request = {
    method: 'GET',
    path: '/v1/latestExecutions',
    params,
  };

  return await request(keys, r) as LatestExecutions.Response;
}
