import { doHttpGet, pipe } from "./utils";
import { companyNameFilter, specialtyFilter } from "./filters";

const API_BASE_PATH = "http://localhost:3001";

export const getAllCompanies = async () =>
  doHttpGet(`${API_BASE_PATH}/api/companies/all`);

export const getAllSpecialties = () =>
  doHttpGet(`${API_BASE_PATH}/api/specialties/all`);

export const filterCompanies = (
  { companyName, specialtyName },
  companies = []
) => {
  const filterResults = pipe(
    companyNameFilter(companyName),
    specialtyFilter(specialtyName)
  );

  return filterResults([...companies]);
};
