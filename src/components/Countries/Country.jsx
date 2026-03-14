import React from "react";

export default function Country({ country }) {
  const { name } = country;

  return (
    <div>
        <p>Name: {name.common}</p>
    </div>
  )
}
