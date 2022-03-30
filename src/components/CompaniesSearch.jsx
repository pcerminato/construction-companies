import { useEffect, useState } from "react";
import SpecialtiesList from "./SpecialtiesList";
import "./CompaniesSearch.css";

export default function CompaniesSearch({ onSearch, specialties }) {
  const [companyName, setCompanyName] = useState("");
  const [specialtyName, setSpecialtyName] = useState("");

  const handleNameChange = ({ target: { value } }) => {
    setCompanyName(value);
  };

  const handleSpecialtyClick = ({ target: { value } }) => {
    setSpecialtyName(value);
  };

  useEffect(() => {
    onSearch({
      companyName,
      specialtyName,
    });
  }, [companyName, specialtyName]);

  return (
    <section className="search-box">
      <input
        placeholder="Search for a company name"
        value={companyName}
        onChange={handleNameChange}
        className="company-name"
      />
      <SpecialtiesList
        specialties={specialties}
        onClick={handleSpecialtyClick}
      />
    </section>
  );
}
