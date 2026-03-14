import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriersPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle visited country clicked", country);
  };
  const countriesData = use(countriersPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h3>Total Country Visited:</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
