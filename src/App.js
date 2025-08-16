// src/App.js
import React from "react";
import DriverOrder from "./delivers/DriverNearbyOrders.jsx";

export default function App() {
  const getCoordinatesFromAddress = () => {
    return fetch("https://zukr2k1std.execute-api.us-east-1.amazonaws.com/dev/location?address=beer yaakov, shoham, 14")
        .then(check => {
          if (!check.ok) throw new Error("Failed to fetch coordinates");
          return check.json();
        });
  }

// קריאה לבדיקה
  getCoordinatesFromAddress().then(data => console.log(data.latitude, data.longitude));

  return <DriverOrder />;
}


