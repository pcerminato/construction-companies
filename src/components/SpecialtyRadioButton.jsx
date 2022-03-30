export default function SpecialtyRadioButton({ name, value, id, onClick }) {
  return (
    <label htmlFor={id}>
      <input
        type="radio"
        value={value}
        id={id}
        onClick={onClick}
        name="specialties"
      />
      {name}
    </label>
  );
}
