import { HandledSymbol, ActiveOrderStatus, OrderType, QuantityConditionsEnforcement, SettleType, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace ActiveOrders {
  export type Parameters = {
    orderId: string,
    page?: number,
    count?: number,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    pagination: {
      currentPage: number,
      count: number,
    },
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
      status: ActiveOrderStatus,
      timeInForce: QuantityConditionsEnforcement,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const activeOrders = async (keys: APIKeys, params: ActiveOrders.Parameters): Promise<ActiveOrders.Response> => {
  const r: ActiveOrders.Request = {
    method: 'GET',
    path: '/v1/activeOrders',
    params,
  };

  return await request(keys, r) as ActiveOrders.Response;
}
