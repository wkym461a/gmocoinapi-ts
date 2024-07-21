import { HandledSymbol } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace Orderbooks {
  export type Parameters = {
    symbol: HandledSymbol,
  };
  export type Request = ReqType<Parameters>;
  export type ResponseData = {
    ask: {
      price: string,
      size: string,
    }[],
    bid: {
      price: string,
      size: string,
    }[],
    symbol: HandledSymbol,
  };
  export type Response = ResType<ResponseData>;
}

export const orderbooks = async (params: Orderbooks.Parameters): Promise<Orderbooks.Response> => {
  const r: Orderbooks.Request = {
    method: 'GET',
    path: '/v1/orderbooks',
    params,
  };

  return await request(r) as Orderbooks.Response;
}
