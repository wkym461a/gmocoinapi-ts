import { APIKeys, NoResponse, ReqType, request } from "./_base";

export namespace ChangeOrder {
  export type Body = {
    orderId: number,
    price: string,
    losscutPrice?: string,
  };
  export type Request = ReqType<{}, Body>;
}

export const changeOrder = async (keys: APIKeys, body: ChangeOrder.Body): Promise<NoResponse> => {
  const r: ChangeOrder.Request = {
    method: 'POST',
    path: '/v1/changeOrder',
    body,
  };

  return await request(keys, r) as NoResponse;
}
