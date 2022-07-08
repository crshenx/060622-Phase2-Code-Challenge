import React, { useState } from "react";

function Planeteer({ planeteer }) {
  const [quote, setQuote] = useState(false);
  function handleClick() {
    setQuote(!quote);
  }
  const currentYear = new Date().getFullYear();

  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={handleClick}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">
            {quote ? planeteer.bio : planeteer.quote}
          </p>
          {currentYear - planeteer.born}
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{planeteer.fromUSA ? `USA-based` : `Working overseas`}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
