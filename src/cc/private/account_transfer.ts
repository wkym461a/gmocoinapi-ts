import { TransferType } from "../parameter-type";
import { APIKeys, ReqType, ResType, request } from "./_base";

export namespace Account_Transfer {
  export type Body = {
    amount: string,
    transferType: TransferType,
  };
  export type Request = ReqType<{}, Body>;
  export type ResponseData = {
    transferAmount: string,
  }[];
  export type Response = ResType<ResponseData>;
}

export const account_transfer = async (keys: APIKeys, body: Account_Transfer.Body): Promise<Account_Transfer.Response> => {
  const r: Account_Transfer.Request = {
    method: 'GET',
    path: '/v1/account/transfer',
    body,
  };

  return await request(keys, r) as Account_Transfer.Response;
}
