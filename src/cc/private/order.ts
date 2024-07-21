import { HandledSymbol, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Order {
  export type Body = { // todo: 条件洗い出し
    symbol: HandledSymbol,
    side: TransactionSide,
    timeInForce?: string,
    losscutPrice?: string,
    size: string,
    cancelBefore?: boolean,
  } & (
    {
      executionType: 'MARKET',
    } |
    {
      executionType: 'LIMIT' | 'STOP',
      price: string,
    }
  );
  export type Request = ReqType<{}, Body>;
  export type ResponseData = string;
  export type Response = ResType<ResponseData>;
}

export const order = async (keys: APIKeys, body: Order.Body): Promise<Order.Response> => {
  const r: Order.Request = {
    method: 'POST',
    path: '/v1/order',
    body,
  };

  return await request(keys, r) as Order.Response;
}
