import { HandledSymbol, OrderCancelType, OrderStatus, OrderType, QuantityConditionsEnforcement, SettleType, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Orders {
  export type Parameters = {
    orderId: string,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    list: {
      rootOrderId: number,
      orderId: number,
      symbol: HandledSymbol,
      side: TransactionSide,
      orderType: OrderType,
      settleType: SettleType,
      size: string,
      executedSize: string,
      price: string,
      losscutPrice: string,
      status: OrderStatus,
      cancelType: OrderCancelType,
      timeInForce: QuantityConditionsEnforcement,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const orders = async (keys: APIKeys, params: Orders.Parameters): Promise<Orders.Response> => {
  const r: Orders.Request = {
    method: 'GET',
    path: '/v1/orders',
    params,
  };

  return await request(keys, r) as Orders.Response;
}
