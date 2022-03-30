import { useEffect, useState } from "react";
import "./App.css";
import CompaniesList from "../src/components/CompaniesList";
import CompaniesSearch from "../src/components/CompaniesSearch";
import {
  getAllCompanies,
  getAllSpecialties,
  filterCompanies,
} from "./services/api";

function App() {
  const [companies, setCompanies] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const fetchInitialData = async () => {
    const [allCompanies, allSpecialties] = await Promise.all([
      getAllCompanies(),
      getAllSpecialties(),
    ]);

    setCompanies(allCompanies);
    setSearchResults(allCompanies);
    setSpecialties(allSpecialties);
  };

  const handleSearch = (searchParams) => {
    const { companyName, specialtyName } = searchParams;

    if (companyName || specialtyName) {
      setSearchResults(
        filterCompanies({ companyName, specialtyName }, companies)
      );
    } else {
      setSearchResults(companies);
    }
  };

  useEffect(() => fetchInitialData(), []);

  return (
    <>
      <header>
        <CompaniesSearch onSearch={handleSearch} specialties={specialties} />
      </header>
      <main>
        <section className="wrapper">
          {searchResults.length ? (
            <CompaniesList companies={searchResults} />
          ) : (
            <p>No results. Please try with different search params.</p>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
