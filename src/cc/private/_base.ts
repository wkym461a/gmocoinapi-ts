import axios from 'axios';
import { createHmac } from 'crypto';

export type Method = 'GET' | 'POST';
export const EndPoint = 'https://api.coin.z.com/private';

export type APIKeys = {
  apiKey: string,
  secretKey: string,
}

export type ReqType<
  Params extends { [Key in string]: string | number | undefined },
  Body extends { [Key in string]: any }
> = {
  method: Method;
  path: string;
  params?: Params;
  body?: Body;
};

export type ResType<ResData extends {}> = {
  status: number;
  data: ResData;
  responsetime: string;
};
export type NoResponse = {
  status: number;
  responsetime: string;
};

export const request = async <
  Params extends { [Key in string]: string | number | undefined },
  Body extends { [Key in string]: any },
  RequestType extends ReqType<Params, Body>,
  ResponseData extends {},
  ResponseType extends ResType<ResponseData>,
>(keys: APIKeys, req: RequestType): Promise<ResponseType | NoResponse> => {
  // パラメータのクエリを生成
  const params = req.params ?? {};
  const queryEntries = Object.entries(params);
  const query = (queryEntries.length > 0)
    ? "?" + queryEntries.map(([ key, value ]) => `${key}=${value}`).join('&')
    : "";

  // リクエストボディを生成
  const body = req.body ?? {};
  const bodyEntries = Object.entries(body);
  const reqBody = (bodyEntries.length > 0)
    ? JSON.stringify(body)
    : "";

  // 認証情報を生成
  const timestamp = Date.now().toString();
  const text = timestamp + req.method + req.path + reqBody;
  const sign = createHmac('sha256', keys.secretKey).update(text).digest('hex');
  const headers = {
    "API-KEY": keys.apiKey,
    "API-TIMESTAMP": timestamp,
    "API-SIGN": sign,
  };

  // リクエスト
  const url = EndPoint + req.path + query;
  const method = req.method;
  const data = (bodyEntries.length > 0)
    ? JSON.stringify(body)
    : undefined;
  const response = await axios.request({ url, method, headers, data });

  // レスポンスに合わせて型を決定し戻り値として返す
  const resData = response.data.data;
  if (resData == null || resData == undefined) {
    return response.data as NoResponse;
  }
  if (Object.keys(resData).length <= 0) {
    return response.data as NoResponse;
  }
  return response.data as ResponseType;
}
