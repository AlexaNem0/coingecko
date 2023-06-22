import React, { useState } from "react";
import { SlWallet } from "react-icons/sl";
import Wallet from "./Wallet";
import "./WalletButton.css";

const WalletButton = ({ walletItems, removeFromWallet }) => {
  const [showWalletModal, setShowWalletModal] = useState(false);

  const openWalletModal = () => {
    setShowWalletModal(true);
  };

  const closeWalletModal = () => {
    setShowWalletModal(false);
  };

  return (
    <div className="btn-group">
      <button className="btn" onClick={openWalletModal}>
        <SlWallet className="btn-wallet" />
        Your Wallet
      </button>
      {showWalletModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeWalletModal}>
              Close
            </button>
            <Wallet
              walletItems={walletItems}
              removeFromWallet={removeFromWallet}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletButton;
