import React from "react";

const CountryList = ({ countries, handleCountrySelect }) => {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>
          <h2 onClick={() => handleCountrySelect(country.code)}>{country.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CountryList;
