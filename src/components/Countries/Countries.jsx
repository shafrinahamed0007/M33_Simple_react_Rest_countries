import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriersPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle Visited Country Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    // console.log("Flags need to be added ", flags);
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriersPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h3>Total Country Visited: {visitedCountries.length} </h3>
      <h3>Total Flags Visited: {visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      <div>
        {
          visitedFlags.map(flag => <img src={flag}></img>)
        }
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
