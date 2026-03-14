import React from "react";
import "./Country.css";

export default function Country({ country }) {
  const handleVisited = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="country">
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <p>Name: {country?.name?.common}</p>
      <p>Capital: {country?.capital?.capital[0]}</p>
      <p>Population: {country?.population?.population}</p>
      <p>
        Area: {country?.area?.area} km2{" "}
        {country?.area?.area > 30000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
}
