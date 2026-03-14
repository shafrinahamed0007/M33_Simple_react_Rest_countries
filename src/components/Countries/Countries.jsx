import React, { use } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriersPromise }) => {
  const countriesData = use(countriersPromise);
  const countries = countriesData.countries;
//   console.log(countries);
  return (
    <div className="countries">
    
      {countries.map((country) => (
        <Country key={country.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
