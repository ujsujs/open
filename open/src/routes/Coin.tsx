import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
  useMatch,
} from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Outlet } from "react-router-dom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinTickers } from "./api";
import { Helmet } from "react-helmet";

interface Params {
  state: {
    name: string;
    id: string;
  };
}
const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Container = styled.div`
  font-size: 25px;
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-weight: 800;
  font-size: 50px;
`;
interface ITag {
  coin_counter: number;
  ico_counter: number;
  name: string;
  id: number;
}
interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  team: ITag[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}
interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change4h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_h: number;
      percent_change_15m: number;
      percent_change4h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume4h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;
interface Paramsa {
  coinID: string;
}
const Tab = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Tabs = styled.span<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? "red" : "blue")};
  background-color: #ffffff;
  border-radius: 20px;
  a {
    padding: 7px 120px;
  }
`;
const Tabsbutton = styled.span`
  color: black;
  background-color: #ff0000;
  border-radius: 20px;
  cursor: pointer;
  a {
    padding: 5px 15px;
  }
`;
function Coin() {
  //const [loading, setLoading] = useState(true);
  const { state } = useLocation() as Params;
  //const [info, setInfo] = useState<IInfoData>();
  //const [priceInfo, setpriceInfo] = useState<IPriceData>();
  const { coinID } = useParams() as unknown as Paramsa;
  const priceMatch = useMatch("/:coinID/price");
  const chartMatch = useMatch("/:coinID/chart");
  const { isLoading: infoLaoding, data: infoData } = useQuery<IInfoData>(
    ["info", coinID],
    () => fetchCoinInfo(coinID)
  );
  const { isLoading: tickersLoading, data: priceData } = useQuery<IPriceData>(
    ["price", coinID],
    () => fetchCoinTickers(coinID),
    {
      refetchInterval: 5,
    }
  );
  // object의 property를 가져와 값 지정
  console.log(infoData);
  const loading = infoLaoding || tickersLoading;
  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </title>
      </Helmet>
      <Tab>
        <Tabsbutton>
          <Link to="/">Back(reselect coins)</Link>
        </Tabsbutton>
      </Tab>
      <Header>
        <Title>
        {state?.name ? state.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading....</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>${priceData?.quotes.USD.ath_price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tab>
            <Tabs isActive={priceMatch !== null}>
              <Link to={`/${coinID}/price`}>Price</Link>
            </Tabs>
            <Tabs isActive={chartMatch !== null}>
              <Link to={`/${coinID}/chart`}>Chart</Link>
            </Tabs>
          </Tab>
          <Outlet context={{ coinID }} />
        </>
      )}
    </Container>
  );
}
export default Coin;
