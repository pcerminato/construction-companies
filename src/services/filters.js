import { makeFilter, makeRegex } from "./utils";

export const companyNameFilter = (companyName) =>
  makeFilter({
    searchAttr: companyName,
    filterPredicate: ({ name }) => name.search(makeRegex(companyName)) > -1,
  });

export const specialtyFilter = (specialtyName) =>
  makeFilter({
    searchAttr: specialtyName,
    filterPredicate: ({ specialties }) => specialties.includes(specialtyName),
  });
