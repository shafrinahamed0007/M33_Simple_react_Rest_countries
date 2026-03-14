import React, { use } from "react";
import Country from "./Country";

const Countries = ({ countriersPromise }) => {
  const countriesData = use(countriersPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>Total Countries: {countries.length}</h1>
      {
        countries.map(country => <Country key={country.cca3} country={country}></Country>)
      }
    </div>
  );
};

export default Countries;
