
export type ExchangeStatus = 'MAINTENANCE' | 'PREOPEN' | 'OPEN';

export type HandledSymbol = HandledSpotSymbol | HandledLeverageSymbol;
export type HandledSpotSymbol = 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'XRP' | 'XEM' | 'XLM' | 'BAT' | 'XTZ' | 'QTUM' | 'ENJ' | 'DOT' | 'ATOM' | 'MKR' | 'DAI' | 'XYM' | 'MONA' | 'FCR' | 'ADA' | 'LINK' | 'DOGE' | 'SOL' | 'ASTR';
export type HandledLeverageSymbol = 'BTC_JPY' | 'ETH_JPY' | 'BCH_JPY' | 'LTC_JPY' | 'XRP_JPY' | 'DOT_JPY' | 'ATOM_JPY' | 'ADA_JPY' | 'LINK_JPY' | 'DOGE_JPY' | 'SOL_JPY';

export type AssetSymbol = 'JPY' | 'BTC' | 'ETH' | 'BCH' | 'LTC' | 'XRP' | 'XEM' | 'XLM' | 'BAT' | 'OMG' | 'XTZ' | 'QTUM' | 'ENJ' | 'DOT' | 'ATOM' | 'MKR' | 'DAI' | 'XYM' | 'MONA' | 'FCR' | 'ADA' | 'LINK' | 'DOGE' | 'SOL' | 'FLR' | 'ASTR' | 'FIL' | 'SAND' | 'CHZ';

export type TransactionSide = 'BUY' | 'SELL';

export type Interval = '1min' | '5min' | '10min' | '15min' | '30min' | '1hour' | '4hour' | '8hour' | '12hour' | '1day' | '1week' | '1month';

export type MarginCallStatus = 'NORMAL' | 'MARGIN_CALL' | 'LOSSCUT';

export type OrderType = 'NORMAL' | 'LOSSCUT';

export type ExecutionType = 'MARKET' | 'LIMIT' | 'STOP';

export type SettleType = 'OPEN' | 'CLOSE';

export type OrderStatus = ActiveOrderStatus | 'CANCELED' | 'EXECUTED' | 'EXPIRED';
export type ActiveOrderStatus = 'WAITING' | 'ORDERED' | 'MODIFYING' | 'CANCELLING';

export type OrderCancelType = 'USER' | 'POSITION_LOSSCUT' | 'INSUFFICIENT_BALANCE' | 'INSUFFICIENT_MARGIN' | 'ACCOUNT_LOSSCUT' | 'MARGIN_CALL' | 'MARGIN_CALL_LOSSCUT' | 'EXPIRED_FAK' | 'EXPIRED_FOK' | 'EXPIRED_SOK' | 'EXPIRED_SELFTRADE';

export type QuantityConditionsEnforcement = 'FAK' | 'FAS' | 'FOK' | 'SOK';

export type TransferType = 'WITHDRAWAL' | 'DEPOSIT';
