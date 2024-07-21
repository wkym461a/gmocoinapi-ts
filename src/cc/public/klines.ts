import { HandledSymbol, Interval } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace KLines {
  export type Parameters = {
    symbol: HandledSymbol,
    interval: Interval,
    date: string,
  };
  export type Request = ReqType<Parameters>;
  export type ResponseData = {
    openTime: string,
    open: string,
    high: string,
    low: string,
    close: string,
    volume: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const klines = async (params: KLines.Parameters): Promise<KLines.Response> => {
  const r: KLines.Request = {
    method: 'GET',
    path: '/v1/klines',
    params,
  };

  return await request(r) as KLines.Response;
}
