import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import DishItems from "./components/DishList";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://starlord.hackerearth.com/recipe`);
      console.log(result.data);
      setItems(result.data);
    };

    fetchItems();
  }, []);

  return (
    <div align="center" className="App">
      <br />
      <header>
        <h1>Recipe App</h1>
      </header>
      <br />

      <div className="center">
        <br />

        <DishItems items={items} />
      </div>
    </div>
  );
}

export default App;