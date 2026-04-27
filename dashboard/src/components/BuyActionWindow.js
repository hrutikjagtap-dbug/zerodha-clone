import React, { useState, useContext } from "react"; // 1. Added useContext
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // 2. You MUST use this hook to access the context functions
  const { closeBuyWindow } = useContext(GeneralContext); 

  const handleBuyClick = (e) => {
    e.preventDefault(); 
    
    axios.post("http://localhost:3000/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: "BUY",
    })
    .then((res) => {
      console.log("Order placed successfully" , res.data);
      // 3. Call the function from the hook
      closeBuyWindow(); 
    })
    .catch((err) => {
      console.error("Error placing order:", err);
    });
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    // 4. Call the function from the hook here too
    closeBuyWindow(); 
  };

  return (
    <div className="container" id="buy-window">
      <div className="header">
        <h3>{uid} <span>× 1 Qty</span></h3>
      </div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required <strong>₹{(stockQuantity * stockPrice).toFixed(2)}</strong>
        </span>
        <div>
          <Link to="#" className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="#" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;