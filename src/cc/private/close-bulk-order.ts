import { HandledSymbol, QuantityConditionsEnforcement, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace CloseBulkOrder {
  export type Body = { // todo: 条件洗い出し
    symbol: HandledSymbol,
    side: TransactionSide,
    timeInForce?: QuantityConditionsEnforcement,
    size: string,
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

export const closeBulkOrder = async (keys: APIKeys, body: CloseBulkOrder.Body): Promise<CloseBulkOrder.Response> => {
  const r: CloseBulkOrder.Request = {
    method: 'POST',
    path: '/v1/closeBulkOrder',
    body,
  };

  return await request(keys, r) as CloseBulkOrder.Response;
}
