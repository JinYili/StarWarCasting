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

  const headerStyle = {
    margin: "40px",
    border: "5px solid pink",
    color: "green"
  };
  const listStyleType = {
    listStyleType: "none",
    margin: "10",
    width: "97%"
  };

  return (
    <div className="App">
      <h1 style={headerStyle}>STAR WAR CASTING</h1>
      {people !== undefined ? (
        <ul style={listStyleType}>
          {people.map(({ name, height, mass, birth_year }) => (
            <li
              className="border border-success rounded"
              key={name + birth_year}
            >
              <p>
                {`${name} is ${height}cm ${mass}KG birth at ${birth_year} year `}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
      {PreviousUrl !== null ? (
        <button
          className="btn-primary px-md-5 mr-3 btn-lg "
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
