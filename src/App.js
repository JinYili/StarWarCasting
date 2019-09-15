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
  const [currentPage, setCurrentPage] = useState(0);

  function fetchPeople(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
        setNextUrl(data.next);
        setPrevioustUrl(data.previous);
        setCurrentPage(getCurrentPageNumber(data.next, data.previous, url));
      });
    return [];
  }

  function getCurrentPageNumber(next, previous, url) {
    if (previous === null) return 1;
    if (next === null) return 9;
    const num = url.slice(-1);
    return parseInt(num);
  }

  return (
    <div className="App">
      <h1 className="headerStyle">STAR WAR CASTING</h1>
      {people !== undefined ? (
        <ul className="listStyleType  list-group-flush">
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
        currentPage={currentPage}
      ></Buttons>
    </div>
  );
}

export default App;
