import { HandledSpotSymbol, HandledLeverageSymbol } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_TradingVolume {
  export type Request = ReqType<{}, {}>;
  export type ResponseData = {
    jpyVolume: string,
    tierLevel: number,
    limit:
    { // 現物銘柄
      symbol: HandledSpotSymbol,
      todayLimitBuySize: string,
      todayLimitSellSize: string,
      takerFee: string,
      makerFee: string,
    } |
    { // レバレッジ銘柄
      symbol: HandledLeverageSymbol,
      todayLimitOpenSize: string,
      takerFee: string,
      makerFee: string,
    }[],
  };
  export type Response = ResType<ResponseData>;
}

export const account_tradingVolume = async (keys: APIKeys): Promise<Account_TradingVolume.Response> => {
  const r: Account_TradingVolume.Request = {
    method: 'GET',
    path: '/v1/account/tradingVolume',
  };

  return await request(keys, r) as Account_TradingVolume.Response;
}
