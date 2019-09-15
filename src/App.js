import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Buttons from "./Buttons";

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
      <Buttons
        pageHandler={fetchPeople}
        getNextUrl={NextUrl}
        getPerviousUrl={PreviousUrl}
        listLength={people.length}
      ></Buttons>
    </div>
  );
}

export default App;
