import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import CountryList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";

const Home = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [selectedCountry, setSelectedCountry] = useState(null);
  if (loading) return <p>Loading countries...</p>;
  if (error) return <p>Error loading countries</p>;

  return (
    <>
      <h1>Countries List</h1>
      <div>
        <h2>Select a country to see details</h2>
        <p>Click on a country name to view its details.</p>
      </div>
      <div className="container">
      <CountryList
        countries={data.countries}
        handleCountrySelect={(code) => setSelectedCountry(code)}
      />
      <CountryDetails code={selectedCountry} />
      </div>
    </>
  );
};

export default Home;
