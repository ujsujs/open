import { reduceEachTrailingCommentRange } from "typescript";

export async function fetchCoins() {
  const response = await fetch("https://api.coinpaprika.com/v1/coins");
  const json = await response.json();
  return json;
}
// fetcher function
//fetch만 함.

/*export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
    response.json()
  );
}*/
interface Paramsa {
  coinID: string;
}
export function fetchCoinInfo(coinID: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`).then(
    (response) => response.json()
  );
}

export function fetchCoinTickers(coinID: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`).then(
    (response) => response.json()
  );
}

export function showPriceData(coinID: string) {
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinID}`
  ).then((response) => response.json());
}

export function fetchPriceInfo(coinID: string) {
  return fetch(`https://api.coinpaprika.com/v1/coins/${coinID}`).then(
    (response) => response.json()
  );
}
export function fetchPriceTickers(coinID: string) {
  return fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}`).then(
    (response) => response.json()
  );
}