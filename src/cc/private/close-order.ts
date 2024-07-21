import { HandledSymbol, QuantityConditionsEnforcement, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace CloseOrder {
  export type Body = { // todo: 条件洗い出し
    symbol: HandledSymbol,
    side: TransactionSide,
    timeInForce?: QuantityConditionsEnforcement,
    settlePosition: {
      positionId: number,
      size: string,
    }[],
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

export const closeOrder = async (keys: APIKeys, body: CloseOrder.Body): Promise<CloseOrder.Response> => {
  const r: CloseOrder.Request = {
    method: 'POST',
    path: '/v1/closeOrder',
    body,
  };

  return await request(keys, r) as CloseOrder.Response;
}
