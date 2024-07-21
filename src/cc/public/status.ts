import { ExchangeStatus } from "../parameter-type";
import { ReqType, ResType, request } from "./_base";

export namespace Status {
  export type Request = ReqType<{}>;
  export type ResponseData = {
    status: ExchangeStatus,
  };
  export type Response = ResType<ResponseData>;
}

export const status = async (): Promise<Status.Response> => {
  const r: Status.Request = {
    method: 'GET',
    path: '/v1/status',
  };

  return await request(r) as Status.Response;
}
