import { HandledSymbol, SettleType, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace CancelBulkOrder {
  export type Body = {
    symbols: HandledSymbol[],
    side?: TransactionSide,
    settleType?: SettleType,
    desc?: boolean,
  };
  export type Request = ReqType<{}, Body>;
  export type ResponseData = number[];
  export type Response = ResType<ResponseData>;
}

export const cancelBulkOrder = async (keys: APIKeys, body: CancelBulkOrder.Body): Promise<CancelBulkOrder.Response> => {
  const r: CancelBulkOrder.Request = {
    method: 'POST',
    path: '/v1/cancelBulkOrder',
    body,
  };

  return await request(keys, r) as CancelBulkOrder.Response;
}
