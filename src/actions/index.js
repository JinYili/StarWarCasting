export const loadList = data => {
  return { type: "LOADLIST", payload: data };
};

export const load = data => {
  return { type: "LOAD", payload: data };
};
