import axios from "axios";
import React, { useState, useEffect } from "react";
import "./NftDetails.css";
import Wallet from "./Wallet";

const NftDetails = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [walletItems, setWalletItems] = useState([]);

  const url =
    "https://api.reservoir.tools/collections/v5?includeTopBid=false&normalizeRoyalties=false&useNonFlaggedFloorAsk=false&sortBy=allTimeVolume&limit=20";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: { accept: "*/*", "x-api-key": "demo-api-key" },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  if (!data) return null;

  const filteredData = data.collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToWallet = (id) => {
    const selectedCollection = data.collections.find(
      (collection) => collection.id === id
    );
    if (selectedCollection) {
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
            id: selectedCollection.id,
            image: selectedCollection.image,
            name: selectedCollection.name,
            quantity: 1,
            price: selectedCollection.floorAsk.price.amount.usd,
            totalValue: selectedCollection.floorAsk.price.amount.usd,
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
            With our powerful wallet, minting and market APIs, you have a
            trustworthy partner to get profit.
          </h2>
          <p>See all available NFT assets: </p>
          <div className="input-container">
            <input
              type="text"
              placeholder="Find your NFT"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button type="submit" className="btn ">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          {filteredData.slice(0, 9).map((collection) => (
            <div className="card" key={collection.id}>
              <div className="top">
                <img src={collection.image} alt="/" />
              </div>
              <div>
                <h5>{collection.name}</h5>
                <p>{collection.floorAsk.price.currency.name}</p>
                <p>${collection.floorAsk.price.amount.usd.toFixed(2)}</p>
              </div>
              <button
                className="btn"
                onClick={() => addToWallet(collection.id)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {walletItems.length > 0 && (
        <Wallet walletItems={walletItems} removeFromWallet={removeFromWallet} />
      )}
    </div>
  );
};

export default NftDetails;
