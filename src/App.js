import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [NextUrl, setNextUrl] = useState(
    "https://swapi.co/api/people/?format=json"
  );
  const [PreviousUrl, setPrevioustUrl] = useState(null);
  const [people, setData] = useState([]);

  function fetchPeople(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setNextUrl(data.next);
        setPrevioustUrl(data.previous);
      });
    return [];
  }

  return (
    <div className="App">
      <h1 className="headerStyle">STAR WAR CASTING</h1>
      {people !== undefined ? (
        <ul className="listStyleType list-group list-group-flush">
          {people.map(({ name, height, mass, birth_year }) => (
            <li
              className="border border-success rounded list-group-item"
              key={name + birth_year}
            >
              <p>{`${name} - ${height}cm - ${mass}KG - birth at ${birth_year}`}</p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {PreviousUrl !== null ? (
        <button
          className="btn-primary px-md-5 mr-5 btn-lg "
          onClick={() => setData(fetchPeople(PreviousUrl))}
        >
          previous
        </button>
      ) : (
        ""
      )}
      {NextUrl !== null ? (
        <button
          className="btn-primary px-md-5 btn-lg "
          onClick={() => setData(fetchPeople(NextUrl))}
        >
          {" "}
          {people.length === 0 ? "Load" : "Next"}{" "}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
