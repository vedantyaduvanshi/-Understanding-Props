import React from "react";
import "./App.css";
import DataComponent from "./components/DataComponent";

function App() {
  const data = DataComponent();

  return (
    <>
      <h2 id="TitleText">Kalvium gallery</h2>
      <div id="image-grid">
        {data.map((item) => (
          <div key={item.id} id="image-container">
            <img src={item.img} alt={`Image ${item.id}`} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
