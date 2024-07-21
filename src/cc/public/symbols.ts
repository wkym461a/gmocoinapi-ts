import { HandledSymbol } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace Symbols {
  export type Request = ReqType<{}>;
  export type ResponseData = {
    symbol: HandledSymbol,
    minOrderSize: string,
    maxOrderSize: string,
    sizeStep: string,
    tickSize: string,
    takerFee: string,
    makerFee: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const symbols = async (): Promise<Symbols.Response> => {
  const r: Symbols.Request = {
    method: 'GET',
    path: '/v1/symbols',
  };

  return await request(r) as Symbols.Response;
}
