import { HandledSymbol, TransactionSide } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace Trades {
  export type Parameters = {
    symbol: HandledSymbol,
    page?: number,
    count?: number,
  };
  export type Request = ReqType<Parameters>;
  export type ResponseData = {
    pagination: {
      currentPage: number,
      count: number,
    },
    list: {
      price: string,
      side: TransactionSide,
      size: string,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const trades = async (params: Trades.Parameters): Promise<Trades.Response> => {
  const r: Trades.Request = {
    method: 'GET',
    path: '/v1/trades',
    params,
  };

  return await request(r) as Trades.Response;
}
