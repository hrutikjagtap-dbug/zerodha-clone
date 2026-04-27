import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Removed unused 'all'

const Orders = () => {
  const [newOrders, setNewOrders] = useState([]);
useEffect(() => {
  // Use 'allOrders' to match the backend GET route
  axios.get("http://localhost:3000/allOrders") 
    .then((res) => {
      setNewOrders(res.data);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);

  return (
    <div className="orders">
      {newOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      ) : (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {newOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;