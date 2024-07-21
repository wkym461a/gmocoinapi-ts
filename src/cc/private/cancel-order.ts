import { APIKeys, NoResponse, ReqType, request } from "./_base";

export namespace CancelOrder {
  export type Body = {
    orderId: number,
  };
  export type Request = ReqType<{}, Body>;
}

export const cancelOrder = async (keys: APIKeys, body: CancelOrder.Body): Promise<NoResponse> => {
  const r: CancelOrder.Request = {
    method: 'POST',
    path: '/v1/cancelOrder',
    body,
  };

  return await request(keys, r) as NoResponse;
}
