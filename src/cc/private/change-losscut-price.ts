import { APIKeys, NoResponse, ReqType, request } from "./_base";

export namespace ChangeLosscutPrice {
  export type Body = {
    positionId: number,
    losscutPrice: string,
  };
  export type Request = ReqType<{}, Body>;
}

export const changeLosscutPrice = async (keys: APIKeys, body: ChangeLosscutPrice.Body): Promise<NoResponse> => {
  const r: ChangeLosscutPrice.Request = {
    method: 'POST',
    path: '/v1/changeLosscutPrice',
    body,
  };

  return await request(keys, r) as NoResponse;
}
