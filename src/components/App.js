// WE GOT THIS!!!
import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";
// import Planeteer from "./Planeteer";

function App() {
  const [planeteers, setPlaneteers] = useState([]);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
      .then((r) => r.json())
      .then(setPlaneteers);
  }, []);

  function searchBar(e) {
    setSearch(e.target.value);
  }

  const filteredPlaneteers = planeteers.filter(
    (planeteer) =>
      planeteer.name.toLowerCase().includes(search) ||
      planeteer.bio.toLowerCase().includes(search)
  );

  function randomButton(randomPlaneteer) {
    setPlaneteers([...planeteers, randomPlaneteer]);
  }

  function handleCheck() {
    setChecked(!checked);
  }

  // const sortByAge = filteredPlaneteers.sort((a, b) =>
  //   a.born > b.born ? -1 : 1
  // );

  // const sortById = filteredPlaneteers.sort((a, b) => (a.id > b.id ? -1 : 1));

  return (
    <div>
      <Header />
      <SearchBar
        search={search}
        searchBar={searchBar}
        handleCheck={handleCheck}
        checked={checked}
      />
      <RandomButton randomButton={randomButton} />
      <PlaneteersContainer
        planeteers={
          !checked
            ? filteredPlaneteers.sort((a, b) => (a.born > b.born ? -1 : 1))
            : filteredPlaneteers.sort((a, b) => (a.id > b.id ? -1 : 1))
        }
      />
    </div>
  );
}

export default App;
