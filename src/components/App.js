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

  return (
    <div>
      <Header />
      <SearchBar search={search} searchBar={searchBar} />
      <RandomButton />
      <PlaneteersContainer planeteers={filteredPlaneteers} />
    </div>
  );
}

export default App;
