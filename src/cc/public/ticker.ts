import { HandledSymbol } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace Ticker {
  export type Parameters = {
    symbol?: HandledSymbol,
  };
  export type Request = ReqType<Parameters>;
  export type ResponseData = {
    ask: string,
    bid: string,
    high: string,
    last: string,
    low: string,
    symbol: HandledSymbol,
    timestamp: string,
    volume: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const ticker = async (params?: Ticker.Parameters): Promise<Ticker.Response> => {
  const r: Ticker.Request = {
    method: 'GET',
    path: '/v1/ticker',
    params,
  };

  return await request(r) as Ticker.Response;
}
