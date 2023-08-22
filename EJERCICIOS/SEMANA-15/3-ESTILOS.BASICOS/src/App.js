import React from "react";

import { randomRGB } from "./utils/helpers";
import "./App.css";

function App() {
  return (
    <main>
      <h1 style={{ background: randomRGB() }}>
        Título con fondo de color aleatorio
      </h1>
      <p className="importante">Este es un párrafo importante.</p>
    </main>
  );
}

export default App;
