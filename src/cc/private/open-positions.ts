import { HandledLeverageSymbol, TransactionSide } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace OpenPositions {
  export type Parameters = {
    symbol: HandledLeverageSymbol,
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
      positionId: number,
      symbol: HandledLeverageSymbol,
      side: TransactionSide,
      orderSize: string,
      price: string,
      lossGain: string,
      leverage: string,
      losscutPrice: string,
      timestamp: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const openPositions = async (keys: APIKeys, params: OpenPositions.Parameters): Promise<OpenPositions.Response> => {
  const r: OpenPositions.Request = {
    method: 'GET',
    path: '/v1/openPositions',
    params,
  };

  return await request(keys, r) as OpenPositions.Response;
}
