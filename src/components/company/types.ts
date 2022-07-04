export interface ICompanyInfo {
  country: string;
  currency: string;
  exchange: string;
  finnhubIndustry: string;
  ipo: string;
  logo: string;
  marketCapitalization: number;
  name: string;
  phone: string;
  shareOutstanding: number;
  ticker: string;
  weburl: string;
}

export interface IObjectData {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}

export interface IFiveMinGraphInfo {
  "Time Series (5min)": {
    [key: string]: IObjectData;
  };
}

export interface IDailyGraphInfo {
  "Time Series (Daily)": {
    [key: string]: IObjectData;
  };
}

export interface IWeeklyGraphInfo {
  "Weekly Time Series": {
    [key: string]: IObjectData;
  };
}

export interface IMonthlyGraphInfo {
  "Monthly Time Series": {
    [key: string]: IObjectData;
  };
}

export interface ISlicedGraphInfo {
  name: string;
  pv: number;
}
