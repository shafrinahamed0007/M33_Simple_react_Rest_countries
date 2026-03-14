import React from "react";

export default function Country({ country }) {
  const { name } = country;

  return (
    <div>
        <img src={country?.flags?.flags?.png} alt={country?.flags?.flags?.alt} />
        <p>Name: {name?.common}</p>
        <p>Capital: {country?.capital?.capital[0]}</p>
        <p>Population: {country?.population?.population}</p>
    </div>
  )
}
