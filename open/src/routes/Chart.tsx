import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { showPriceData } from "./api";
import ApexChart from "react-apexcharts";
import Price from "./Price";

interface ChartProps {
  coinID: string;
}
interface ChartData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  market_cap: number;
}
function Chart() {
  const { coinID } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<ChartData[]>(["chart", coinID], () =>
    showPriceData(coinID)
  );
  console.log(data?.map((price) => price.open)[11],)
  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : (
        <ApexChart
          series={[
            {
              name: "Price",
              data: [
                {
                  x: new Date(1538778600000),
                  y: [
                    data?.map((price) => price.open)[0],
                    data?.map((price) => price.high)[0],
                    data?.map((price) => price.low)[0],
                    data?.map((price) => price.close)[0],
                  ],
                },
                {
                  x: new Date(1538780400000),
                  y: [
                    data?.map((price) => price.open)[1],
                    data?.map((price) => price.high)[1],
                    data?.map((price) => price.low)[1],
                    data?.map((price) => price.close)[1],
                  ],
                },
                {
                  x: new Date(1538782200000),
                  y: [
                    data?.map((price) => price.open)[2],
                    data?.map((price) => price.high)[2],
                    data?.map((price) => price.low)[2],
                    data?.map((price) => price.close)[2],
                  ],
                },
                {
                  x: new Date(1538784000000),
                  y: [
                    data?.map((price) => price.open)[3],
                    data?.map((price) => price.high)[3],
                    data?.map((price) => price.low)[3],
                    data?.map((price) => price.close)[3],
                  ],
                },
                {
                  x: new Date(1538785800000),
                  y: [
                    data?.map((price) => price.open)[4],
                    data?.map((price) => price.high)[4],
                    data?.map((price) => price.low)[4],
                    data?.map((price) => price.close)[4],
                  ],
                },
                {
                  x: new Date(1538787600000),
                  y: [
                    data?.map((price) => price.open)[5],
                    data?.map((price) => price.high)[5],
                    data?.map((price) => price.low)[5],
                    data?.map((price) => price.close)[5],
                  ],
                },
                {
                  x: new Date(1538789400000),
                  y: [
                    data?.map((price) => price.open)[6],
                    data?.map((price) => price.high)[6],
                    data?.map((price) => price.low)[6],
                    data?.map((price) => price.close)[6],
                  ],
                },
                {
                  x: new Date(1538791200000),
                  y: [
                    data?.map((price) => price.open)[7],
                    data?.map((price) => price.high)[7],
                    data?.map((price) => price.low)[7],
                    data?.map((price) => price.close)[7],
                  ],
                },
                {
                  x: new Date(1538793000000),
                  y: [
                    data?.map((price) => price.open)[8],
                    data?.map((price) => price.high)[8],
                    data?.map((price) => price.low)[8],
                    data?.map((price) => price.close)[8],
                  ],
                },
                {
                  x: new Date(1538794800000),
                  y: [
                    data?.map((price) => price.open)[9],
                    data?.map((price) => price.high)[9],
                    data?.map((price) => price.low)[9],
                    data?.map((price) => price.close)[9],
                  ],
                },
                {
                  x: new Date(1538796600000),
                  y: [
                    data?.map((price) => price.open)[10],
                    data?.map((price) => price.high)[10],
                    data?.map((price) => price.low)[10],
                    data?.map((price) => price.close)[10],
                  ],
                },
                {
                  x: new Date(1538798400000),
                  y: [
                    data?.map((price) => price.open)[11],
                    data?.map((price) => price.high)[11],
                    data?.map((price) => price.low)[11],
                    data?.map((price) => price.close)[11],
                  ],
                },
                {
                  x: new Date(1538800200000),
                  y: [
                    data?.map((price) => price.open)[12],
                    data?.map((price) => price.high)[12],
                    data?.map((price) => price.low)[12],
                    data?.map((price) => price.close)[12],
                  ],
                },
                {
                  x: new Date(1538802000000),
                  y: [
                    data?.map((price) => price.open)[13],
                    data?.map((price) => price.high)[13],
                    data?.map((price) => price.low)[13],
                    data?.map((price) => price.close)[13],
                  ],
                },
                {
                  x: new Date(1538803800000),
                  y: [
                    data?.map((price) => price.open)[14],
                    data?.map((price) => price.high)[14],
                    data?.map((price) => price.low)[14],
                    data?.map((price) => price.close)[14],
                  ],
                },
                {
                  x: new Date(1538805600000),
                  y: [
                    data?.map((price) => price.open)[15],
                    data?.map((price) => price.high)[15],
                    data?.map((price) => price.low)[15],
                    data?.map((price) => price.close)[15],
                  ],
                },
                {
                  x: new Date(1538807400000),
                  y: [
                    data?.map((price) => price.open)[16],
                    data?.map((price) => price.high)[16],
                    data?.map((price) => price.low)[16],
                    data?.map((price) => price.close)[16],
                  ],
                },
                {
                  x: new Date(1538809200000),
                  y: [
                    data?.map((price) => price.open)[17],
                    data?.map((price) => price.high)[17],
                    data?.map((price) => price.low)[17],
                    data?.map((price) => price.close)[17],
                  ],
                },
                {
                  x: new Date(1538811000000),
                  y: [
                    data?.map((price) => price.open)[18],
                    data?.map((price) => price.high)[18],
                    data?.map((price) => price.low)[18],
                    data?.map((price) => price.close)[18],
                  ],
                },
                {
                  x: new Date(1538812800000),
                  y: [
                    data?.map((price) => price.open)[19],
                    data?.map((price) => price.high)[19],
                    data?.map((price) => price.low)[19],
                    data?.map((price) => price.close)[19],
                  ],
                },
                {
                  x: new Date(1538814600000),
                  y: [
                    data?.map((price) => price.open)[20],
                    data?.map((price) => price.high)[20],
                    data?.map((price) => price.low)[20],
                    data?.map((price) => price.close)[20],
                  ],
                },
              ],
            },
          ]}
         options = {{
          chart : {
            height: 350,
            type: 'candlestick',
          },
          title: {
            text: 'CandleStick Chart - Category X-axis',
            align: 'left'
          },
          annotations: {
            xaxis: [
              {
                x: 'Oct 06 14:00',
                borderColor: '#00E396',
                label: {
                  borderColor: '#00E396',
                  style: {
                    fontSize: '12px',
                    color: '#fff',
                    background: '#00E396'
                  },
                  orientation: 'horizontal',
                  offsetY: 7,
                  text: 'Annotation Test'
                }
              }
            ]
          },
          tooltip: {
            enabled: true,
          },
          xaxis: {
            type: 'category',
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
         }}
         
        />
      )}
    </div>
  );
}
export default Chart;
