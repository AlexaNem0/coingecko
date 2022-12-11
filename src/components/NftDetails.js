import axios from "axios";
import React, { useState, useEffect } from "react";
// import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./NftDetails.css";

const NftDetails = () => {
  const [data, setData] = useState(null);

  // const url =
  //   "https://api.reservoir.tools/collections/v5?includeTopBid=false&normalizeRoyalties=false&useNonFlaggedFloorAsk=false&sortBy=allTimeVolume&limit=20";

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.reservoir.tools/collections/v5",
      params: {
        includeTopBid: "false",
        normalizeRoyalties: "false",
        useNonFlaggedFloorAsk: "false",
        sortBy: "allTimeVolume",
        limit: "20",
      },
      headers: { accept: "*/*", "x-api-key": "demo-api-key" },
    };
    axios
      .request(options)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  if (!data) return null;

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
            <input type="email" placeholder="Find your NFT" />
            <button type="submit" className="btn ">
              Search
            </button>
          </div>
        </div>
        <div className="right">
          <div className="card">
            <div className="top">
              <img src={data.collections[0].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[0].name}</h5>
              <p>{data.collections[0].floorAsk.price.currency.name}</p>
              <p>${data.collections[0].floorAsk.price.amount.usd.toFixed(2)}</p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[9].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[9].name}</h5>
              <p>{data.collections[9].floorAsk.price.currency.name}</p>
              <p>${data.collections[9].floorAsk.price.amount.usd.toFixed(2)}</p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[10].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[10].name}</h5>
              <p>{data.collections[10].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[10].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[3].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[3].name}</h5>
              <p>{data.collections[3].floorAsk.price.currency.name}</p>
              <p>${data.collections[3].floorAsk.price.amount.usd.toFixed(2)}</p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[15].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[15].name}</h5>
              <p>{data.collections[15].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[15].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[12].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[12].name}</h5>
              <p>{data.collections[12].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[12].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[16].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[16].name}</h5>
              <p>{data.collections[16].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[16].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[18].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[18].name}</h5>
              <p>{data.collections[18].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[18].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
          <div className="card">
            <div className="top">
              <img src={data.collections[19].image} alt="/" />
            </div>
            <div>
              <h5>{data.collections[19].name}</h5>
              <p>{data.collections[19].floorAsk.price.currency.name}</p>
              <p>
                ${data.collections[19].floorAsk.price.amount.usd.toFixed(2)}
              </p>
            </div>
            <button className="btn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
