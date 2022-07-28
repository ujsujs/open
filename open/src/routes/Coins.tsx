import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "./api";
import { Helmet } from "react-helmet";
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-weight: 800;
  font-size: 50px;
`;
const Container = styled.div`
  font-size: 25px;
  padding: 0px 20px;
  margin: 0 auto;
  max-width: 600px;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
  background-color: #ff0000;
  margin-bottom: 5px;
  border-radius: 15px;
  color: #0b0a0a;
  margin-top: 10px;
  a {
    padding: 25px;
    transition: color 0.1s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: white;
    }
  }
`;
const IMG = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 10px;
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}
function Coins() {
  const {isLoading,data} =  useQuery<ICoin[]>(['allcoins'], fetchCoins)
  console.log(isLoading)
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>coins</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading....</Loader>
      ) : (
        <CoinList>
          {data?.slice(0,100).map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={coin}>
                <IMG
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}
export default Coins;
