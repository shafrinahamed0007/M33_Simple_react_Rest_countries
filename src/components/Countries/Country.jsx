import React, { useState } from "react";
import "./Country.css";

export default function Country({ country, handleVisitedCountries }) {
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountries);

  const handleVisited = () => {
    // basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // 2nd system
    // setVisited(visited ? false : true);

    // 3rd system
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
      <p>Name: {country?.name?.common}</p>
      <p>Capital: {country?.capital?.capital[0]}</p>
      <p>Population: {country?.population?.population}</p>
      <p>
        Area: {country?.area?.area} km2
        {country?.area?.area > 30000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
}
