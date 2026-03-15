import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriersPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Handle Visited Country Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const countriesData = use(countriersPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h3>Total Country Visied: {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>
            {" "}
            key = {country.cca3.cca3} {country.name.common}
          </li>
        ))}
      </ol>
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
