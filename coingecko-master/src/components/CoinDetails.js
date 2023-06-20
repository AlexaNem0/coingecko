import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./CoinDetails.css";

const Card = ({ id, image, name, currentPrice, priceChangePercentage24h }) => (
  <div className="card" key={id}>
    <div className="top">
      <img src={image} alt="/" />
    </div>
    <div>
      <h5>{name}</h5>
      <p>${currentPrice.toLocaleString()}</p>
    </div>
    {priceChangePercentage24h < 0 ? (
      <span className="red">
        <FiArrowDown className="icon" />
        {priceChangePercentage24h.toFixed(2)}%
      </span>
    ) : (
      <span className="green">
        <FiArrowUpRight className="icon" />
        {priceChangePercentage24h.toFixed(2)}%
      </span>
    )}
    <button className="btn">Add</button>
  </div>
);

const CoinDetails = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return null;

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2 className="explore">
            Explore top Crypto Coins Like BitCoin, Ethereum and DogeCoin
          </h2>
          <p>See all available Crypto Coins assets:</p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Find your coin"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit" className="btn ">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          {filteredData.map((coin) => (
            <Card
              key={coin.id}
              id={coin.id}
              image={coin.image}
              name={coin.name}
              currentPrice={coin.current_price}
              priceChangePercentage24h={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
