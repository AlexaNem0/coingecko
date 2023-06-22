import React from "react";

const Wallet = ({ walletItems, removeFromWallet }) => {
  const handleRemove = (itemId) => {
    removeFromWallet(itemId);
  };

  return (
    <div className="wallet-container right featured">
      <h2>Wallet</h2>
      {walletItems.length > 0 ? (
        walletItems.map((item, index) => (
          <div className="wallet-item" key={index}>
            <div className="wallet-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="wallet-item-details">
              <h5>{item.name}</h5>
              <p>Quantity: {item.quantity}</p>
              <p>Total Value: ${item.totalValue.toFixed(2)}</p>
            </div>
            <div className="wallet-item-price">$ {item.price.toFixed(2)}</div>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="wallet-empty">Your wallet is empty.</p>
      )}
    </div>
  );
};

export default Wallet;
