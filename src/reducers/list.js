const listReducer = (state = 0, action) => {
  switch (action.type) {
    case "LOADLIST":
      //      const newDdata = fetchList(state);
      // const num = fetchList(state);
      return state + 8;
    default:
      return state;
  }
};
/*
async function fetchList(prevData) {
  const url = `https://swapi.co/api/people/?format=json`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      //console.log(data.count);
      //const values = [...prevData, ...data.results];
      return data.count;
    });
}
*/
export default listReducer;
