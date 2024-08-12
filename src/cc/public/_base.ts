import axios from 'axios';

export type Method = 'GET';
export const EndPoint = 'https://api.coin.z.com/public';

export type ReqType<
  Params extends { [Key in string]: string | number | undefined }
> = {
  method: Method;
  path: string;
  params?: Params;
};

export type ResType<ResData extends {}> = {
  status: number;
  data: ResData;
  responsetime: string;
};

export const request = async <
  Params extends { [Key in string]: string | number | undefined },
  RequestType extends ReqType<Params>,
  ResponseData extends {},
  ResponseType extends ResType<ResponseData>,
>(req: RequestType): Promise<ResponseType> => {
  // パラメータのクエリを生成
  const params = req.params ?? {};
  const queryEntries = Object.entries(params);
  const query = (queryEntries.length > 0)
    ? "?" + queryEntries.map(([ key, value ]) => `${key}=${value}`).join('&')
    : "";

  // リクエスト
  const url = EndPoint + req.path + query;
  const method = req.method;
  const response = await axios.request({ url, method });

  // レスポンスを戻り値として返す
  return response.data as ResponseType;
}
