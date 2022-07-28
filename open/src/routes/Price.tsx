import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { isMemberName } from "typescript";
import { fetchCoinInfo, fetchPriceInfo, fetchPriceTickers } from "./api";

interface coinIDProps {
  coinID: string;
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
interface ITag {
  position: string;
  name: string;
  id: string;
}
const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  color: white;
`;
const Div = styled.div`
  color: #ff0000;
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const DivGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
function Price() {
  const { coinID } = useOutletContext<coinIDProps>();
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfoData>(
    ["info2", coinID],
    () => fetchPriceInfo(coinID),
    {
      refetchInterval: 7,
    }
  );
  const { isLoading: priceLoading, data: pricwData } = useQuery<IPriceData>(
    ["price2", coinID],
    () => fetchPriceTickers(coinID),
    {
      refetchInterval: 7,
    }
  );
  return (
    <Container>
      {infoLoading ? (
        "Loading...."
      ) : (
        <>
          <Div>Founder : {infoData?.team[0].id}</Div>
          <Div>top Price : ${pricwData?.quotes.USD.ath_price.toFixed(2)}</Div>
          <DivGrid>
           <span>1 years  ago: <br/> ${pricwData?.quotes.USD.percent_change_1y}</span>
            <span>30 days  ago : <br/>  ${pricwData?.quotes.USD.percent_change_30d}</span>
            <span> 7days  ago : <br/>  ${pricwData?.quotes.USD.percent_change_7d}</span>
            <span>6 hours  ago : <br/> ${pricwData?.quotes.USD.percent_change_6h}</span>
            <span>1 hours  ago : <br/> ${pricwData?.quotes.USD.percent_change_1h}</span>
            <span>30 minutes  ago : <br/> ${pricwData?.quotes.USD.percent_change_30m}</span>
            <span>15 minutes  ago : <br/> ${pricwData?.quotes.USD.percent_change_15m}</span>
            <span>{pricwData?.quotes.USD.percent_change4h}</span>
          </DivGrid>
        </>
      )}
    </Container>
  );
}
export default Price;
