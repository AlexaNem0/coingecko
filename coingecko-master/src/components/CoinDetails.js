import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CoinDetails.css";
import "./Wallet.css";
import Card from "./Card";
import Wallet from "./Wallet";

const CoinDetails = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [walletItems, setWalletItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToWallet = (id) => {
    const selectedCoin = data.find((coin) => coin.id === id);
    if (selectedCoin) {
      const existingItem = walletItems.find((item) => item.id === id);
      if (existingItem) {
        const updatedItems = walletItems.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalValue: (item.quantity + 1) * item.price,
              }
            : item
        );
        setWalletItems(updatedItems);
      } else {
        setWalletItems([
          ...walletItems,
          {
            id: selectedCoin.id,
            image: selectedCoin.image,
            name: selectedCoin.name,
            quantity: 1,
            price: selectedCoin.current_price,
            totalValue: selectedCoin.current_price,
          },
        ]);
      }
    }
  };

  const removeFromWallet = (id) => {
    const updatedItems = walletItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 0,
            totalValue:
              item.quantity > 1
                ? (item.quantity - 1) * item.price
                : item.totalValue,
          }
        : item
    );

    setWalletItems(updatedItems.filter((item) => item.quantity > 0));
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2 className="explore">
            Explore top Crypto Coins Like BitCoin, Ethereum and DogeCoin
          </h2>
          <p>
            See all available Crypto Coins assets in real time and trade like a
            PRO:
          </p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Find your coin"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit" className="btn">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          {filteredData.slice(0, 9).map((coin) => (
            <Card
              key={coin.id}
              id={coin.id}
              image={coin.image}
              name={coin.name}
              currentPrice={coin.current_price}
              priceChangePercentage24h={coin.price_change_percentage_24h}
              addToWallet={addToWallet}
            />
          ))}
        </div>
      </div>

      {walletItems.length > 0 && (
        <Wallet walletItems={walletItems} removeFromWallet={removeFromWallet} />
      )}
    </div>
  );
};

export default CoinDetails;
