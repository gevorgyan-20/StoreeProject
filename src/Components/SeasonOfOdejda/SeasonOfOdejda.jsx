import React from 'react'

const SeasonOfOdejda = () => {
  const Seasons = ["Демисезон", "winter", "summer"];

  return (
    <div className="SeasonFilter">
      <h1>Сезон</h1>
      <div className="SFilterBlock">
        {Seasons.map((el) => {
          return (
            <div key={el} className="SeasonSelect">
              <input type="checkbox"/>
              <p>{el}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeasonOfOdejda