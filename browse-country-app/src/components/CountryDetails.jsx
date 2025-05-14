import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../graphql/queries";

const CountryDetails = ({ code }) => {
  const { data, loading, error } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code },
    skip: !code,
  });

  if (!code) return <p>Select a country to see details</p>;
  if (loading) return <p>Loading country details...</p>;
  if (error) return <p>Error loading country details</p>;

  const country = data.country;

  return (
    <div>
      <h2>
        {country.name} {country.emoji}
      </h2>
      <p>
        <strong>Native Name:</strong> {country.native}
      </p>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Currency:</strong> {country.currency}
      </p>
      <p>
        <strong>Phone:</strong> {country.phone}
      </p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.code}>{language.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetails;
