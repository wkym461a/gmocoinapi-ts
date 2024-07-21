# GMOコインAPI

## 概要

[GMOコインAPI - 暗号資産](https://api.coin.z.com/docs)をNPMパッケージ（TypeScript）で実装したもの。

## 導入方法

```
npm i gmocoinapi
```

## 使い方

### Public API - 取引所ステータス

```ts
import { GMOCoinAPI } from 'gmocoinapi';

GMOCoinAPI.CC.Public.status()
  .then(data => {
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log(error);
  });
```

### Private API - 余力情報を取得

```ts
import { GMOCoinAPI } from 'gmocoinapi';

const keys = {
  apiKey: "YOUR_API_KEY",
  secretKey: "YOUR_SECRET_KEY",
}

GMOCoinAPI.CC.Private.account_margin(keys)
  .then(data => {
    console.log(JSON.stringify(data));
  })
  .catch(error => {
    console.log(error);
  });
```

## Todo

- 暗号資産 WebSocket APIの実装
- 外国為替FX APIの実装
