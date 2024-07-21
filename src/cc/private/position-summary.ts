import { HandledLeverageSymbol, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace PositionSummary {
  export type Parameters = {
    symbol?: HandledLeverageSymbol,
  };
  export type Request = ReqType<Parameters, {}>;
  export type ResponseData = {
    list: {
      averagePositionRate: string,
      positionLossGain: string,
      side: TransactionSide,
      sumOrderQuantity: string,
      sumPositionQuantity: string,
      symbol: HandledLeverageSymbol,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const positionSummary = async (keys: APIKeys, params?: PositionSummary.Parameters): Promise<PositionSummary.Response> => {
  const r: PositionSummary.Request = {
    method: 'GET',
    path: '/v1/positionSummary',
    params,
  };

  return await request(keys, r) as PositionSummary.Response;
}
