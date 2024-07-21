import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace CancelOrders {
  export type Body = {
    orderIds: number[],
  };
  export type Request = ReqType<{}, Body>;
  export type ResponseData = {
    success: number[],
    failed: {
      message_code: string,
      message_string: string,
      orderId: number,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const cancelOrders = async (keys: APIKeys, body: CancelOrders.Body): Promise<CancelOrders.Response> => {
  const r: CancelOrders.Request = {
    method: 'POST',
    path: '/v1/cancelOrders',
    body,
  };

  return await request(keys, r) as CancelOrders.Response;
}
