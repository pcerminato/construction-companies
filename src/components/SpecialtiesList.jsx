import SpecialtyRadioButton from "./SpecialtyRadioButton";
import "./SpecialtiesList.css";

export default function SpecialtiesList({ specialties, onClick }) {
  return (
    <ul className="specialties-list">
      <li key="sp-all">
        <SpecialtyRadioButton name="All" id="all" onClick={onClick} value="" />
      </li>
      {specialties.map((sp) => (
        <li key={`sp-${sp}`}>
          <SpecialtyRadioButton
            name={sp}
            id={sp.toLowerCase()}
            onClick={onClick}
            value={sp}
          />
        </li>
      ))}
    </ul>
  );
}
