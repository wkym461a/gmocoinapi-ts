import { HandledSymbol, SettleType, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Executions {
  export type Parameters =
  {
    orderId: string,
  } |
  {
    executionId: string,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    list: {
      executionId: number,
      orderId: number,
      positionId: number,
      symbol: HandledSymbol,
      side: TransactionSide,
      settleType: SettleType,
      price: string,
      lossGain: string,
      fee: string,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const executions = async (keys: APIKeys, params: Executions.Parameters): Promise<Executions.Response> => {
  const r: Executions.Request = {
    method: 'GET',
    path: '/v1/executions',
    params,
  };

  return await request(keys, r) as Executions.Response;
}
