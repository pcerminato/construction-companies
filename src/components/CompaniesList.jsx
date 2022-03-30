import CompanyDetail from "./CompanyDetail";
import "./CompaniesList.css";

export default function CompaniesList({ companies }) {
  return (
    <ul className="list-view">
      {companies.map(({ name, logo, specialties, city }, i) => (
        <li className="list-item" key={`cmp-${i}`}>
          <CompanyDetail
            name={name}
            logo={logo}
            specialties={specialties.join(" - ")}
            city={city}
          />
        </li>
      ))}
    </ul>
  );
}
