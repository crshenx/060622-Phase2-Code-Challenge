import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planeteers }) {
  const renderPlaneteers = planeteers.map((planeteer) => {
    return <Planeteer planeteer={planeteer} key={planeteer.id} />;
  });
  return <ul className="cards">{renderPlaneteers}</ul>;
}

export default PlaneteersContainer;
