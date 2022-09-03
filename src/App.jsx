import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Especial para você</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
