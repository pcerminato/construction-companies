export const doHttpGet = async (url) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x);

export const makeFilter =
  ({ searchAttr, filterPredicate }) =>
  (list) =>
    searchAttr ? list.filter(filterPredicate) : list;

export const makeRegex = (term) => new RegExp(term, "i");
