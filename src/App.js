import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    let url =
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json["Time Series (5min)"]);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="App">
      <table>
        <tr>
          <th>DateTime</th>
          <th>Open</th>
          <th>High</th>
          <th>low</th>
          <th>Close</th>
          <th>Volume</th>
        </tr>
        {Object.keys(data).map((item) => {
          let objectData = data[item];
          return (
            <tr>
              <td>{item}</td>
              <td>{objectData["1. open"]}</td>
              <td>{objectData["2. high"]}</td>
              <td>{objectData["3. low"]}</td>
              <td>{objectData["4. close"]}</td>
              <td>{objectData["5. volume"]}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
