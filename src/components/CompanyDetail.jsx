import "./CompanyDetail.css";

export default function CompanyDetail({ city, name, logo, specialties }) {
  return (
    <div className="list-item">
      <div className="list-header">
        <img src={logo} alt={name} />
      </div>
      <div className="list-details">
        <h4>{name}</h4>
        <p>{specialties}</p>
        <p>{city}</p>
      </div>
    </div>
  );
}
